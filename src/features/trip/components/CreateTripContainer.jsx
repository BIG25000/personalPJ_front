import React from "react";
import { useState } from "react";
import Modal from "../../../components/Modal";
import TripForm from "./TripForm";
import RegisterForm from "../../auth/components/RegisterForm";
import { Link } from "react-router-dom";

function CreateTripContainer() {
  const [isOpen, setIsOpen] = useState(false);
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
          id="register"
          button="btn bg-greenOne text-egg"
        >
          <TripForm />
        </Modal>
      </div>
    </>
  );
}

export default CreateTripContainer;
