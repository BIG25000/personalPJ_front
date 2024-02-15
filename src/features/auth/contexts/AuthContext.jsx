import { useState } from "react";
import { createContext } from "react";
import { storeToken } from "../../../utils/local-storage";
import * as authApi from "../../../api/auth";
import { useEffect } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {}, []);

  const register = async (user) => {
    const res = await authApi.register(user);
    setAuthUser(res.data.newUser);
    storeToken(res.data.accessToken);
  };

  const login = async (credential) => {
    const res = await authApi.login(credential);
    setAuthUser(res.data.user);
    storeToken(res.data.accessToken);
  };
  return (
    <AuthContext.Provider value={{ register, authUser, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
