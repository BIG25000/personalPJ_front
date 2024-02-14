import React from "react";

import { useState } from "react";

function RegisterForm() {
  const [close, setClose] = useState(false);

  return (
    <>
      <h1 className="text-center font-medium">Register</h1>
      <div className="grid grid-cols-2 gap-1 items-center">
        <div className="col-span-full">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              type="text"
              placeholder="a@gmail.com"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Frist Name</span>
            </div>
            <input
              type="text"
              placeholder="Somchai"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label"></div>
          </label>
        </div>
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Last Name</span>
            </div>
            <input
              type="text"
              placeholder="Chatee"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label"></div>
          </label>
        </div>
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label"></div>
          </label>
        </div>
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Confirm Password</span>
            </div>
            <input
              type="text"
              placeholder="Confirm password"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label"></div>
          </label>
        </div>
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Food Allergies</span>
            </div>
            <input
              type="text"
              placeholder="Mango"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label"></div>
          </label>
        </div>
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Congenital Disease</span>
            </div>
            <input
              type="text"
              placeholder="Asthma"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label"></div>
          </label>
        </div>
        <div className="col-span-full">
          <div className="label">
            <span className="label-text">Congenital Disease</span>
          </div>
          <select className="select select-ghost w-full max-w-xs bg-white">
            <option disabled selected>
              Pick your gender
            </option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div className="col-span-full">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Moblie</span>
            </div>
            <input
              type="text"
              placeholder="0123456789"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label"></div>
          </label>
        </div>
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Name Emergency</span>
            </div>
            <input
              type="text"
              placeholder="Somying"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label"></div>
          </label>
        </div>
        <div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Mobile Emergency</span>
            </div>
            <input
              type="text"
              placeholder="0123456789"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label"></div>
          </label>
        </div>
      </div>
      <div className="flex justify-center gap-3">
        <button className="btn bg-greenOne text-egg w-full">
          Create Account
        </button>
      </div>
    </>
  );
}

export default RegisterForm;
