import { useState } from "react";
import { createContext } from "react";

import * as authApi from "../../../../api/auth";
import { getToken } from "../../../../utils/local-storage";
import { useEffect } from "react";

export const HistoryContext = createContext();

function HistoryContextProvider({ children }) {
  const [allUser, setALlUser] = useState([]);
  const [allCreate, setAllCreate] = useState([]);

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

  useEffect(() => {
    if (getToken()) {
      authApi
        .fetchAllCreate()
        .then((res) => {
          setAllCreate(res.data.data);
        })
        .catch((err) => {});
    } else {
    }
  }, []);

  return (
    <HistoryContext.Provider value={{ allUser, allCreate }}>
      {children}
    </HistoryContext.Provider>
  );
}

export default HistoryContextProvider;
