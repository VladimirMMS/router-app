import React from 'react'
import { Redirect, Route } from 'react-router'

const user = 1


export default function PrivateRoute({component: Component, ...rest}) {
    return (
        <Route {...rest}>
            { user ? <Component/>
            : 
            <Redirect to= "/login"/>
            }
            
        </Route>
    )
}
