import { createContext } from "react";
import type { AuthContextType } from "../auth.types";

const INITIAL_AUTH_CONTEXT: AuthContextType = {
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
};

export const AuthContext = createContext<AuthContextType>(INITIAL_AUTH_CONTEXT);
