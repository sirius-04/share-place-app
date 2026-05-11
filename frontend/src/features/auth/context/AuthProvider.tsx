import { useState } from "react";
import type { AuthContextType } from "../auth.types";
import { AuthContext } from "./AuthContext"

interface AuthProviderProps {
  children: React.ReactNode;
};

export default function AuthProvider({ children }: AuthProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };
  const authContextValue: AuthContextType = {
    isLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>    
  );
};
