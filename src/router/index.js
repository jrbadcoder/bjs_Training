import React from 'react';
import { ROUTES } from './config';
import _map from 'lodash/map';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function AppRouter(props) {
    return (
        <Router>
            <Switch>
                {
                    _map(ROUTES, ({ name, path, Component }) => {
                        return (
                            <Route path={path}>
                                <Component name={name} />
                            </Route>
                        )
                    })
                }
            </Switch>
        </Router>
    )
}

export default AppRouter;