import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import { Text } from 'react-native';

import {
  Head,
  Container,
  ButtonHome,
  Logo,
  ButtonCart,
  ItemCount,
} from './style';

function Header({ navigation, cartSize }) {
  return (
    <Head>
      <Container>
        <ButtonHome onPress={() => navigation.navigate('Main')}>
          <Logo />
        </ButtonHome>
        <ButtonCart onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>{cartSize || 0}</ItemCount>
        </ButtonCart>
      </Container>
    </Head>
  );
}

export default connect(
  state => ({
    cartSize: state.cart.length,
  }),
  null
)(Header);
