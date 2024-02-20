import React from "react";
import { toast } from "react-toastify";
import { useState } from "react";

import useAuth from "../../../hooks/use-auth";
import useTrip from "../../trip/hooks/use-trip";
import { useParams } from "react-router-dom";

function JoinForm() {
  const [input, setInput] = useState({});
  const { authUser } = useAuth();
  const { trips, createJoinTrip } = useTrip();
  const findTripById = trips.find((el) => el.id == useParams().tripId);
  console.log(findTripById);

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      input.userId = authUser.id;
      input.tripId = findTripById.id;
      console.log("*******", input);
      await createJoinTrip(input);
      toast.success("join success");
    } catch (err) {
      console.log(err);
    }
    document.getElementById("join").close();
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h1 className="text-center font-medium">Join Trip</h1>
      <div className="grid grid-cols-3 items-center gap-2">
        <div className="col-span-2">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Name Join</span>
            </div>
            <input
              type="text"
              placeholder="Somchai"
              name="nameJoin"
              value={input.nameJoin}
              onChange={handleChangeInput}
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label"></div>
          </label>
        </div>
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">People Join</span>
            </div>
            <input
              type="text"
              placeholder="10"
              name="peopleJoin"
              value={input.peopleJoin}
              onChange={handleChangeInput}
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label"></div>
          </label>
        </div>
      </div>
      <div className="flex justify-center gap-3">
        <button className="btn bg-greenOne text-egg w-full" type="submit">
          Join
        </button>
      </div>
    </form>
  );
}

export default JoinForm;
