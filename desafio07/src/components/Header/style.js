import styled from 'styled-components/native';
import logo from '../../assets/image/logo.png';

export const Head = styled.View`
  width: 100%;
  height: 65px;
  background: #816099;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 20px;
`;

export const ButtonHome = styled.TouchableOpacity``;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
`;

export const ButtonCart = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: row;
`;

export const ItemCount = styled.Text`
  padding-left: 5px;
  text-align: center;
  position: absolute;
  min-width: 15px;
  min-height: 15px;
  top: -10px;
  right: -12px;
  color: #fff;
  background: red;
  font-weight: bold;
  font-size: 12px;
  border-radius: 7.5px;
  overflow: hidden;
  padding: 2px;
`;
