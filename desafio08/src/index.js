import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import store from './store';

import './config/ReactotronConfig';
import Routes from './routes';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#816099" />
      <Routes />
    </Provider>
  );
}
