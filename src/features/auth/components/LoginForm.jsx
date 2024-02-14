import React from "react";

import { useState } from "react";

function LoginForm() {
  const [isRegister, setIsRegister] = useState(false);

  const handleModal = () => {
    document.getElementById("register").showModal();
    document.getElementById("login").close();
  };
  return (
    <>
      <h1 className="text-center font-medium">Login</h1>
      <div className="grid">
        <div className="flex justify-center">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="text"
              placeholder="a@gmail.com"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
        <div className="flex justify-center">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label">
              <button className="label-text-alt underline">
                forget password?
              </button>

              <button
                onClick={handleModal}
                className="label-text-alt underline"
              >
                register
              </button>
            </div>
          </label>
        </div>
      </div>
      <div className="flex justify-center gap-3 ">
        <button className="btn bg-greenOne text-egg w-full">Login</button>
      </div>
    </>
  );
}

export default LoginForm;
