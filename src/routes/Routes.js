import React from 'react'
import { Switch } from 'react-router-dom'

import RoutesHandler from '../components/RouteHandler'

import SignIn from '../pages/Signin'
import Success from '../pages/Success'


const Routes = () => {
    return (
        <Switch>
            <RoutesHandler exact path='/'>
                <SignIn />
            </RoutesHandler>
            <RoutesHandler private path='/success'>
                <Success/>
            </RoutesHandler>
        </Switch>
    )

}

export default Routes