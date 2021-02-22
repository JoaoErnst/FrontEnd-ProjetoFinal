import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './views/home';
import About from './views/about';
import RegisterFighter from './views/register-fighter';
import ListFighter from './views/list-fighter';
import DetailFighter from './views/detail-fighter';
//Arrow Function
const Routes = () => (
    <Switch>
    <Route exact path="/" component={Home}   />
    <Route exact path="/about" component={About}   />
    <Route exact path="/register-fighter" component={RegisterFighter}   />
    <Route exact path="/list-fighter" component={ListFighter}   />
    <Route exact path="/detail-fighter/:id" component={DetailFighter}   />
    </Switch>
);
export default Routes;