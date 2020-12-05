import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Test from './pages/Test';
import paths from './utils/paths'

function Routes() {
    return (
        <Switch>
            <Route exact path={paths.home} component={Home} />
            <Route exact path={paths.test} component={Test} />
        </Switch>
    );
}

export default Routes;
