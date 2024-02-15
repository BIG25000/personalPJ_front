import validateLogin from "../validations/validate-login";
import useAuth from "../../../hooks/use-auth";
import { toast } from "react-toastify";
import { useState } from "react";

function LoginForm() {
  const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState({});

  const { login } = useAuth();

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const validationError = validateLogin(input);
      if (validationError) {
        return setError(validationError);
      }

      await login(input);
      toast.success("login success");
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    }
  };

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <h1 className="text-center font-medium">Login</h1>
      <div className="grid">
        <div className="flex justify-center">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              name="email"
              value={input.email}
              type="text"
              placeholder="a@gmail.com"
              className="input input-bordered w-full max-w-xs"
              onChange={handleChangeInput}
            />
            {error ? (
              <small className="text-red-600">{error.email}</small>
            ) : null}
          </label>
        </div>
        <div className="flex justify-center">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input
              name="password"
              value={input.password}
              type="password"
              placeholder="password"
              className="input input-bordered w-full max-w-xs"
              onChange={handleChangeInput}
            />
            {error ? (
              <small className="text-red-600">{error.password}</small>
            ) : null}
          </label>
        </div>
      </div>
      <div className="flex justify-center gap-3 mt-5">
        <button className="btn bg-greenOne text-egg w-full" type="submit">
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
