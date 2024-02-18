import React from "react";
import Modal from "../../../components/Modal";
import TripForm from "./TripForm";
import { Link } from "react-router-dom";
import useTrip from "../hooks/use-trip";

function CreateTripContainer() {
  const { createTrip } = useTrip();

  const submitTripForm = async (formData) => {
    await createTrip(formData);
    console.log(formData);
  };

  return (
    <>
      <div className="flex justify-between mt-5 mx-10 items-center">
        <div className="flex gap-5">
          <div className="text-greenTwo font-medium">!!!UPCOMING TRIPS!!!</div>
          <Link to="/allTrip" className="underline font-medium">
            VIEW ALL TRIP
          </Link>
        </div>
        <Modal
          title="Create Trip"
          id="creatTrip"
          button="btn bg-greenOne text-egg"
        >
          <TripForm onSubmit={submitTripForm} />
        </Modal>
      </div>
    </>
  );
}

export default CreateTripContainer;
