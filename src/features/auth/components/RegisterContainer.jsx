import React from "react";
import { useState } from "react";
import Modal from "../../../components/Modal";
import RegisterForm from "./RegisterForm";
import useAuth from "../../../hooks/use-auth";
import { Link } from "react-router-dom";

function RegisterContainer() {
  const { guestId } = useAuth();
  return (
    <>
      <div className="flex justify-between items-center">
        <button className="underline">forgot your password?</button>
        <Modal title="Register" id="register" button="underline text-md">
          <RegisterForm />
        </Modal>
        <Link
          onClick={guestId}
          to="/guest"
          className="btn bg-greenTwo text-egg"
        >
          GUEST ☻
        </Link>
      </div>
    </>
  );
}

export default RegisterContainer;
