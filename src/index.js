import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './configureStore';
import LocaleProvider from './context/localeContext';
import './root.css';

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LocaleProvider>
  </Provider>,
  document.getElementById('root'),
);
