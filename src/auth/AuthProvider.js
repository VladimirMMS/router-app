import { createContext } from "react";
import { useState, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null)

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user))
        
    }, [user])

    const contextValue = {
        user,
        login() {
            setUser({id:1, username:'vladimir'})
        },

        logout() {
            setUser(null)
        },

        isLogged() {
            return !!user;
        }
    }

    return <AuthContext.Provider value = {contextValue}>
        {children}
    </AuthContext.Provider>

}
export default AuthProvider;