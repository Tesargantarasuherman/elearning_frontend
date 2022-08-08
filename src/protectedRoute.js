import React from 'react'
import { Route,Redirect } from 'react-router-dom'
import auth from './auth'
import Home from './pages/Home'

export const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={
            (props) => {
                if(auth.isAuthenticate()){
                    return <Component {...props} />
                }
                else{
                   return <Home />
                }
            }
        } />
    )
}