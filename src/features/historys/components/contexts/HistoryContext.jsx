import { useState } from "react";
import { createContext } from "react";

import * as authApi from "../../../../api/auth";
import { getToken } from "../../../../utils/local-storage";
import { useEffect } from "react";
import { toast } from "react-toastify";

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

  const deleteCreateTrip = async (id) => {
    await authApi.deleteCreateTrip(id);
    toast.success("delete trip success");
  };

  const deleteJoinTrip = async (id) => {
    await authApi.deleteJoinTrip(id);
    toast.success("cancle trip success");
  };

  return (
    <HistoryContext.Provider
      value={{ allUser, allCreate, deleteCreateTrip, deleteJoinTrip }}
    >
      {children}
    </HistoryContext.Provider>
  );
}

export default HistoryContextProvider;
