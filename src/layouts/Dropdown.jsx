import useAuth from "../hooks/use-auth";

function Dropdown() {
  const { logout } = useAuth();

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1 bg-egg">
        Nataphong Maibok
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-greenTwo rounded-box w-52"
      >
        <li>
          <a>Edit Profile</a>
        </li>
        <li>
          <div onClick={logout} role="button">
            LOGOUT
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
