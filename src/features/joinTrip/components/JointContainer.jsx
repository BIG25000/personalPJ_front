import React from "react";
import Modal from "../../../components/Modal";

import JoinForm from "./JoinForm";

function JointContainer() {
  return (
    <Modal title="join" id="join" button="underline text-md">
      <JoinForm />
    </Modal>
  );
}

export default JointContainer;
