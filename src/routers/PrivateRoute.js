import React from 'react'
import { Redirect, Route, useLocation } from 'react-router'
import useAuth from '../auth/useAuth'




export default function PrivateRoute({component: Component, ...rest}) {

    const {isLogged} = useAuth();
    
    const location = useLocation()


    return (
        <Route {...rest}>
            { isLogged() ? <Component/>
            : 
            <Redirect to= {{pathname:'/login', state: {from: location}}}/>
            }
            
        </Route>
    )
}
