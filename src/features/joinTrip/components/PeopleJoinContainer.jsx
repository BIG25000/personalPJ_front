import React from "react";
import PeopleJoinForm from "./PeopleJoinForm";
import useTrip from "../../trip/hooks/use-trip";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PeopleJoinContainer() {
  const { getJoinAll, showJoin } = useTrip();
  const { pathname } = useLocation();
  console.log(pathname.split("/")[2]);

  useEffect(() => {
    getJoinAll(pathname.split("/")[2]);
  }, []);

  const a = showJoin.map((el) => <PeopleJoinForm item={el} />);

  return (
    <>
      <div className="text-center font-semibold text-xl">USER JOIN TRIP</div>
      <div>{a}</div>
    </>
  );
}

export default PeopleJoinContainer;
