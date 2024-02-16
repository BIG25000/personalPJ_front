import { Link } from "react-router-dom";
import useAuth from "../hooks/use-auth";

function DropdownGuest() {
  const { logout } = useAuth();

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1 bg-egg">
        NATTHAPONG SUMSUM
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-greenTwo rounded-box w-52"
      >
        <li>
          <a>EDIT PROFILE</a>
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

export default DropdownGuest;
