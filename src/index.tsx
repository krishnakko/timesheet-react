import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import configureStore from './utils/configure-store';
import 'bootstrap/dist/css/bootstrap.min.css';


const store = configureStore();
const history = createBrowserHistory({ basename: "/" });

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
