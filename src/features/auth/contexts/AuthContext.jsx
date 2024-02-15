import { useState } from "react";
import { createContext } from "react";

import * as authApi from "../../../api/auth";
import { getToken, storeToken, clearToken } from "../../../utils/local-storage";
import { useEffect } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    if (getToken()) {
      authApi
        .fetchMe()
        .then((res) => {
          setAuthUser(res.data.user);
        })
        .catch((err) => {});
    } else {
    }
  }, []);

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

  const logout = () => {
    setAuthUser(null);
    clearToken();
  };

  return (
    <AuthContext.Provider value={{ register, authUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
