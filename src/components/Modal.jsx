import React from "react";

function Modal({ children, title, id }) {
  return (
    <>
      <button
        className="btn bg-egg"
        onClick={() => document.getElementById(id).showModal()}
      >
        {title}
      </button>
      <dialog id={id} className="modal">
        <div className="modal-box bg-egg w-1/3">{children}</div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default Modal;
