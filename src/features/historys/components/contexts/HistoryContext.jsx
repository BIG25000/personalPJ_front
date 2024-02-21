import { useState } from "react";
import { createContext } from "react";

import * as authApi from "../../../../api/auth";
import { getToken } from "../../../../utils/local-storage";
import { useEffect } from "react";

export const HistoryContext = createContext();

function HistoryContextProvider({ children }) {
  const [allUser, setALlUser] = useState([]);

  useEffect(() => {
    if (getToken()) {
      authApi
        .fetchAll()
        .then((res) => {
          setALlUser(res.data.data);
        })
        .catch((err) => {});
    } else {
    }
  }, []);

  return (
    <HistoryContext.Provider value={{ allUser }}>
      {children}
    </HistoryContext.Provider>
  );
}

export default HistoryContextProvider;
