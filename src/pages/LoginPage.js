import React from 'react'
import useAuth from '../auth/useAuth';
import { useLocation, useHistory } from 'react-router'

export default function LoginPage() {

    const history = useHistory()
    const location = useLocation()
    const {login} = useAuth();

    console.log(location)
    const handleLogin = () => {
        login()
        history.push(location.state?.from || '/dashboard')
    }
    
    return (
        <div>
            <h1>LoginPage</h1>
            <button onClick = {handleLogin}>Signin</button>
        </div>
    )
}
