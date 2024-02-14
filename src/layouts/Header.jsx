import React from "react";
import LoginForm from "../features/auth/components/LoginForm";
import RegisterForm from "../features/auth/components/RegisterForm";
import Modal from "../components/Modal";

function Header() {
  return (
    <div className="navbar bg-greenOne ">
      <div className="flex-1 gap-2">
        <a className="btn btn-ghost text-xl text-egg">เดินปะ</a>
        <input
          type="text"
          placeholder="search"
          className="input input-bordered w-1/5 max-w-xs h-10 "
        />
      </div>
      <div className="flex-none gap-2">
        <Modal title="Login" id="login">
          <LoginForm />
        </Modal>
        <Modal title="Register" id="register">
          <RegisterForm />
        </Modal>
      </div>
    </div>
  );
}

export default Header;
