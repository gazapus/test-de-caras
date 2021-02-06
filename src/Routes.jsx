import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Test from './pages/TestPage';
import UserForm from './pages/FormTest';
import Instrucctions from './pages/Instrucctions';
import paths from './utils/paths'

function Routes() {
    return (
        <Switch>
            <Route exact path={paths.home} component={Home} />
            <Route exact path={paths.test} component={Test} />
            <Route exact path={paths.test_user} component={UserForm} />
            <Route exact path={paths.userForm} component={UserForm} />
            <Route exact path={paths.instrucctions} component={Instrucctions} />
        </Switch>
    );
}

export default Routes;
