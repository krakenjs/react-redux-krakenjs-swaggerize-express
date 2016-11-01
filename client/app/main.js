import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import App from './components/app';
import Home from './pages/home';
import Cart from './pages/cart';
import AddPet from './pages/addpet';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

const app = document.getElementById('app');
ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/addpet" component={AddPet}/>
            <Route path="/cart" component={Cart}/>
        </Route>
    </Router>), app);
