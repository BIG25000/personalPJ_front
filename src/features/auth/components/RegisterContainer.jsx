import React from "react";
import { useState } from "react";
import Modal from "../../../components/Modal";
import RegisterForm from "./RegisterForm";

function RegisterContainer() {
  return (
    <>
      <div className="flex justify-between items-center">
        <button className="underline">forgot your password?</button>
        <Modal title="Register" id="register" button="underline text-md">
          <RegisterForm />
        </Modal>
      </div>
    </>
  );
}

export default RegisterContainer;
