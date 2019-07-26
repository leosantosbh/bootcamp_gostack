import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';

import { Container, Title } from './styles';

export default function Agend() {
  return (
    <Background>
      <Container>
        <Title>Criar</Title>
      </Container>
    </Background>
  );
}

Agend.navigationOptions = {
  tabBarLabel: 'Criar',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="add" size={20} color={tintColor} />
  ),
};
