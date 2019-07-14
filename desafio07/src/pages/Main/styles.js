import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  padding-top: -40px;
  background: #555;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Product = styled.View`
  background: #fff;
  padding: 10px;
  margin: 5px 5px 10px 5px;
  border-radius: 8px;
`;

export const ProdHeader = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductImage = styled.Image`
  height: 150;
  width: 150;
`;

export const ProductTitle = styled.Text`
  font-size: 18px;
  flex: 1;
  flex-direction: row;
  padding-top: 20px;
  padding-left: 10px;
`;

export const ProdFooter = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProductPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #816099;
  padding-right: 10px;
  margin-left: 15px;
  padding-top: 15px;
`;

export const AddCart = styled.TouchableOpacity`
  background: #816099;
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  margin-top: auto;
`;

export const AddCartAmount = styled.View`
  padding: 12px;
  background: #7915c1;
  border-radius: 20px;
  border: 3px solid #816099;
  flex-direction: row;
  align-items: center;
`;

export const AddCartAmountCount = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 5px;
  font-weight: bold;
`;

export const AddCartText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
