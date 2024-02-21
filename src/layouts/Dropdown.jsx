import { Link } from "react-router-dom";
import useAuth from "../hooks/use-auth";
import { useRef } from "react";

function Dropdown() {
  const {
    authUser: { firstName, lastName },
    logout,
  } = useAuth();

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn bg-egg">
        {firstName} {lastName}
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-greenTwo rounded-box w-52"
      >
        <li>
          <a>EDIT PROFILE</a>
        </li>
        <li>
          <Link to="/history">HISTORY</Link>
        </li>
        <li>
          <button onClick={logout} role="button">
            LOGOUT
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
