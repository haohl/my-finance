import React from 'react';
import { BrowserRouter, HashRouter, Switch, Route as RouteTag } from 'react-router-dom';
import { Route } from './Route';

export interface Props {
    type: 'browser' | 'hash';
    routes: Route[];
}

const mapRouteToComponent: React.FunctionComponent<Route> = (route) => {
    return (<RouteTag path={route.path}>{route.component}</RouteTag>);
}

const RouterOutlet: React.FunctionComponent<Props> = (props) => {
    return props.type === 'browser' ?
        (
            <BrowserRouter>
                <Switch>
                    {props.routes.map(mapRouteToComponent)}
                </Switch>
            </BrowserRouter>
        ) :
        (
            <HashRouter>
                <Switch>
                    {props.routes.map(mapRouteToComponent)}
                </Switch>
            </HashRouter>
        );
}

export default RouterOutlet;
