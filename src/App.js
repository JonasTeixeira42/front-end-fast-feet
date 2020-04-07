import React from 'react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import { Router } from 'react-router-dom';
import history from './services/history';

import store from './store';

import GlobalStyle from './styles/global';

import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
