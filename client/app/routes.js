import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/app';
import Home from './containers/home';
import Cart from './containers/cart';
import AddPet from './containers/addpet';
import Details from './containers/details';
import Login from './containers/login';
import Logout from './containers/logout';
import Profile from './containers/profile';

export default <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/addpet" component={AddPet}/>
    <Route path="/cart" component={Cart}/>
    <Route path="/details/:id" component={Details}/>
    <Route path="/login" component={Login}/>
    <Route path="/logout" component={Logout}/>
    <Route path="/profile" component={Profile}/>
</Route>
