import React from 'react';
import ReactDOM from 'react-dom';

//Routes
import { BrowserRouter } from 'react-router-dom';
import Routes from './config/routes';

//Redux
import store from './config/store'
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store()}>
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));