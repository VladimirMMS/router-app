import { createContext } from "react";
import { useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    const contextValue = {
        user,
        login() {
            setUser({id:1, username:'vladimir'})
        },
        logout() {
            setUser(null)
        }
    }

    return <AuthContext.Provider value = {contextValue}>
        {children}
    </AuthContext.Provider>

}
export default AuthProvider;