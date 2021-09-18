import * as React from 'react'
import { Route, RouteProps, Redirect } from 'react-router';

export interface IProps {
    layout: React.ComponentClass<any>;
}

export const AppRoute = ({ component: Component, layout: Layout, path: Path, ...rest }: IProps & RouteProps ) => {
    return <Route {...rest} render={props => (
        <Layout>
            <Component {...props} />
        </Layout>
    )} />;
}