import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

export const AuthRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/auth/login" component={LoginPage} />
                <Route exact path="/auth/register" component={RegisterPage} />

                <Redirect to ="/auth/login" />
            </Switch>
        </div>
    )
}