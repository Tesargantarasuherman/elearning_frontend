import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Logo from '../src/images/logo-ureshii.png'
import './i18n'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import reduxThunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={(
      <div className="loading">
        <img src={Logo} alt="" />
      </div>
    )}>
      <App />
    </Suspense>  </Provider>,
  document.querySelector('#root')
);

