import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const RouteHandler = ({ children, ...routeProps }) => {

    const email = localStorage.getItem('email')
    const authorized = (routeProps.private && !email) ? false : true

    return (
        <Route {...routeProps}
            render={() =>
                authorized ? children : <Redirect to='/' />
            }
        />
    );
}

export default RouteHandler