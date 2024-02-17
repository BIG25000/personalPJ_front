import { Link } from "react-router-dom";
import useAuth from "../hooks/use-auth";

function DropdownGuest() {
  const { logout } = useAuth();

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1 bg-egg">
        GUEST
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-greenTwo rounded-box w-52"
      >
        <li>
          <a>REGISTER</a>
        </li>
        <li>
          <Link onClick={logout} role="button" to="/login">
            LOGOUT
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default DropdownGuest;
