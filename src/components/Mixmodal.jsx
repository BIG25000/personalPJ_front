import React from "react";
import Modal from "./Modal";
import RegisterForm from "../features/auth/components/RegisterForm";

function Mixmodal() {
  return (
    <Modal title="Register" id="register">
      <RegisterForm />
    </Modal>
  );
}

export default Mixmodal;
