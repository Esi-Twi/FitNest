import * as React from 'react';
import { createContext, useContext, useState, ReactNode } from 'react'


type Role = "supervisor" | "trainer" | "member"

interface User{
    role: Role;
}

interface AuthContextType  {
    user: User; 
    setUser: React.Dispatch<React.SetStateAction<User>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthPovider = ({children} : {children: ReactNode}) => {
    const [user, setUser] = useState<User>({role: 'member'})

  return (
    <AuthContext.Provider value={{user, setUser}}>
        {children}
    </AuthContext.Provider>
  );
};


export const useAuth = (): AuthContextType => {
    const context= useContext(AuthContext)
    if(!context) throw new Error("useAuth must be used with AuthProvider")

    return context;
}