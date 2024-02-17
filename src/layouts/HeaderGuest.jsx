import React from "react";
import LoginForm from "../features/auth/components/LoginForm";
import RegisterForm from "../features/auth/components/RegisterForm";
import Modal from "../components/Modal";
import Dropdown from "./Dropdown";
import Search from "./Search";
import DropdownGuest from "./DropdownGuest";
import { Link } from "react-router-dom";

function HeaderGuest() {
  return (
    <div className="navbar bg-greenOne text-egg">
      <div className="flex-1">
        <Link to="/guest" className="btn btn-ghost text-xl text-egg">
          ไม่เดิน
        </Link>
        <Search />
      </div>
      <div className="justify-self-end">
        <DropdownGuest />
      </div>
    </div>
  );
}

export default HeaderGuest;
