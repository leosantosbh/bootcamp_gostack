import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  List,
  Product,
  ProdHeader,
  ProductImage,
  ProductTitle,
  ProdFooter,
  AddCart,
  ProductPrice,
  AddCartAmount,
  AddCartAmountCount,
  AddCartText,
} from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

// eslint-disable-next-line react/prefer-stateless-function
class Main extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await api.get('/products');

    this.setState({ products: response.data });
  };

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  render() {
    const { products } = this.state;

    const { amount } = this.props;

    return (
      <Container>
        <List
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Product>
              <ProdHeader>
                <ProductImage source={{ uri: item.image }} />
                <ProductTitle>{item.title}</ProductTitle>
              </ProdHeader>
              <ProdFooter>
                <AddCart onPress={() => this.handleAddProduct(item.id)}>
                  <AddCartAmount>
                    <Icon name="add-shopping-cart" color="#FFF" size={20} />
                    <AddCartAmountCount>
                      {amount[item.id] || 0}
                    </AddCartAmountCount>
                  </AddCartAmount>
                  <AddCartText>ADICIONAR</AddCartText>
                </AddCart>
                <ProductPrice>{formatPrice(item.price)}</ProductPrice>
              </ProdFooter>
            </Product>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    // eslint-disable-next-line no-param-reassign
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
