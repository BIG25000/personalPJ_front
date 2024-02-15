import React from "react";
import { toast } from "react-toastify";
import { useState } from "react";
import validateRegister from "../validations/validate-register";
import useAuth from "../../../hooks/use-auth";

function RegisterForm() {
  const [input, setInput] = useState({});
  const [error, setError] = useState({});
  const { register } = useAuth();

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      const validateError = validateRegister(input);
      if (validateError) {
        return setError(validateError);
      }
      await register(input);
      toast.success("register success");
    } catch (err) {
      if (err.response?.data.message === "EMAIL_IN_USER") {
        return setError({ emai: "already in use" });
      }
      toast.error(err.response?.data.message);
    }
    document.getElementById("register").close();
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleFormSubmit}>
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
              name="email"
              value={input.email}
              onChange={handleChangeInput}
              className="input input-bordered w-full"
            />
            {error ? (
              <small className="text-red-600">{error.email}</small>
            ) : null}
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
              name="firstName"
              value={input.firstName}
              onChange={handleChangeInput}
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label"></div>
            {error ? (
              <small className="text-red-600">{error.firstName}</small>
            ) : null}
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
              name="lastName"
              value={input.lastName}
              onChange={handleChangeInput}
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label"></div>
            {error ? (
              <small className="text-red-600">{error.lastName}</small>
            ) : null}
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
              name="password"
              value={input.password}
              onChange={handleChangeInput}
              className="input input-bordered w-full max-w-xs"
            />
            {error ? (
              <small className="text-red-600">{error.password}</small>
            ) : null}
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
              name="confirmPassword"
              value={input.confirmPassword}
              onChange={handleChangeInput}
              className="input input-bordered w-full max-w-xs"
            />
            {error ? (
              <small className="text-red-600">{error.confirmPassword}</small>
            ) : null}
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
              name="foodAllergies"
              value={input.foodAllergies}
              onChange={handleChangeInput}
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
              name="congenitalDisease"
              value={input.congenitalDisease}
              onChange={handleChangeInput}
              className="input input-bordered w-full max-w-xs"
            />
            <div className="label"></div>
          </label>
        </div>
        <div className="col-span-full">
          <div className="label">
            <span className="label-text">Gender</span>
          </div>
          <select
            className="select select-ghost w-full max-w-xs bg-white"
            onChange={handleChangeInput}
            name="gender"
            value={input.gender}
          >
            <option disabled selected>
              Pick your gender
            </option>
            <option>MALE</option>
            <option>FEMALE</option>
            <option>OTHER</option>
          </select>
        </div>
        <div className="col-span-full">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Mobile</span>
            </div>
            <input
              type="text"
              placeholder="0123456789"
              onChange={handleChangeInput}
              name="mobile"
              value={input.mobile}
              className="input input-bordered w-full max-w-xs"
            />
            {error ? (
              <small className="text-red-600">{error.mobile}</small>
            ) : null}
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
              onChange={handleChangeInput}
              name="nameEmergency"
              value={input.nameEmergency}
              className="input input-bordered w-full max-w-xs"
            />
            {error ? (
              <small className="text-red-600">{error.nameEmergency}</small>
            ) : null}
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
              onChange={handleChangeInput}
              name="mobileEmergency"
              value={input.mobileEmergency}
              className="input input-bordered w-full max-w-xs"
            />
            {error ? (
              <small className="text-red-600">{error.mobileEmergency}</small>
            ) : null}
            <div className="label"></div>
          </label>
        </div>
      </div>
      <div className="flex justify-center gap-3">
        <button className="btn bg-greenOne text-egg w-full" type="submit">
          Create Account
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
