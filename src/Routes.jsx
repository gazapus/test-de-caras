import React from 'react';
import paths from './utils/paths'
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Test from './pages/TestPage';
import UserForm from './pages/FormTest';
import Instrucctions from './pages/Instrucctions';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Confirmation from './pages/Confirmation';
import Profile from './pages/Profile';
import CancelationChange from './pages/CancelEmailChange';

function Routes() {
    return (
        <Switch>
            <Route exact path={paths.home} component={Home} />
            <Route exact path={paths.test} component={Test} />
            <Route path={paths.test_user} component={UserForm}/>
            <Route path={paths.userForm} component={UserForm}/>
            <Route exact path={paths.instrucctions} component={Instrucctions} />
            <Route exact path={paths.signup} component={Signup} />
            <Route exact path={paths.login} component={Login} />
            <Route exact path={paths.confirmation} component={Confirmation} />
            <Route exact path={paths.profile} component={Profile} />
            <Route exact path={paths.cancel_change} component={CancelationChange} />
        </Switch>
    );
}

export default Routes;