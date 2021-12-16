import React, { useContext, useEffect } from 'react' 
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

import { AuthContext } from '../context/AuthContext'

import { Spinner } from '../components/Spinner'

export const AppRouter = () => {

    const { auth, verifyToken } = useContext(AuthContext)

    useEffect(() => {
        verifyToken()
    },[verifyToken])

    if(auth.checking) {
        return <Spinner />
    }

    return (
        <Router>
            <div>
                <Switch>
                    
                </Switch>
            </div>
        </Router>
    )

}