import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Test from './pages/Test';
import UserForm from './pages/FormTest';
import paths from './utils/paths'

function Routes() {
    return (
        <Switch>
            <Route exact path={paths.home} component={Home} />
            <Route exact path={paths.test} component={Test} />
            <Route exact path={paths.userForm} component={UserForm} />
        </Switch>
    );
}

export default Routes;
