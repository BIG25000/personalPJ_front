import React from "react";
import allUserById from "../../../hooks/allUse-auth";
import HistoryForm from "./HistoryForm";
import useAuth from "../../../hooks/use-auth";
import { Link } from "react-router-dom";
function HistoryContainer() {
  const { allUser } = allUserById();
  const { authUser } = useAuth();
  console.log(allUser);

  const a = allUser
    .filter((el) => el.userId === authUser.id)
    .map((el, index) => (
      <Link to={`/trip/${el.tripId}`}>
        <HistoryForm key={index} data={el} />
      </Link>
    ));
  return <div>{a}</div>;
}

export default HistoryContainer;
