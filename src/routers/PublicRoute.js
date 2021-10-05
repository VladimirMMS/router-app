import React from 'react'
import { Redirect, Route} from 'react-router'
import useAuth from '../auth/useAuth'


export default function PublicRoute({component: Component, ...rest}) {

    const {isLogged} = useAuth();    

    return (
        <Route {...rest}>
            { !isLogged() ? <Component/>
            : 
            <Redirect to= '/dashboard'/>
            } 
        </Route>
    )
}