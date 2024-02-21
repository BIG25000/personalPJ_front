import React from "react";
import allUserById from "../../../hooks/allUse-auth";
import HistoryForm from "./HistoryForm";
function HistoryContainer() {
  const { allUser } = allUserById();

  const a = allUser.map((el, index) => <HistoryForm key={index} data={el} />);
  return <div>{a}</div>;
}

export default HistoryContainer;
