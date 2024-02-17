import React from "react";
import LoginForm from "../features/auth/components/LoginForm";
import RegisterForm from "../features/auth/components/RegisterForm";
import Modal from "../components/Modal";
import Dropdown from "./Dropdown";
import Search from "./Search";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar bg-greenOne text-egg">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl text-egg">
          เดินปะ
        </Link>
        <Search />
      </div>
      <div className="justify-self-end">
        <Dropdown />
      </div>
    </div>
  );
}

export default Header;
