import React from "react";
import allUserById from "../../../hooks/allUse-auth";
import HistoryForm from "./HistoryForm";
import useAuth from "../../../hooks/use-auth";
function HistoryContainer() {
  const { allUser } = allUserById();
  const { authUser } = useAuth();

  const a = allUser
    .filter((el) => el.userId === authUser.id)
    .map((el, index) => <HistoryForm key={index} data={el} />);
  return <div>{a}</div>;
}

export default HistoryContainer;
