import { useState } from "react";
import { createContext } from "react";

import * as authApi from "../../../api/auth";
import { getToken, storeToken, clearToken } from "../../../utils/local-storage";
import { useEffect } from "react";

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [authUser, setAuthUser] = useState("");
  const [sh, setSh] = useState("");
  const [shD, setShd] = useState("");

  const handleSh = (e) => {
    setSh(e.target.value);
  };

  const handleShD = (e) => {
    setShd(e.target.value);
  };

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
    setAuthUser(""); // ต้องเป็นสตริง STR
    clearToken();
  };

  const guestId = async () => {
    const res = await authApi.guestIn();
    setAuthUser(res.data);
    storeToken(res.data.accessToken);
  };

  return (
    <AuthContext.Provider
      value={{
        register,
        authUser,
        login,
        logout,
        guestId,
        sh,
        handleSh,
        shD,
        handleShD,
        setShd,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
