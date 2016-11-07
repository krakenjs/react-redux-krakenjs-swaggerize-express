import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Thunk from 'redux-thunk';
import { Router, browserHistory } from 'react-router';
import './styles/main.scss';
import Routes from './routes';
import Reducer from './reducers';
import { findAllPets } from './actions';


const store = createStore(Reducer, applyMiddleware(Thunk));

const app = document.getElementById('app');
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={Routes}></Router>
    </Provider>,
    app);
