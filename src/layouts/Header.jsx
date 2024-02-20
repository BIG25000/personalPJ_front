import React from "react";

import Dropdown from "./Dropdown";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "../config/axios";

function Header() {
  const updateStatus = async () => {
    await axios.patch("/updateStatus");
  };
  useEffect(() => updateStatus(), []);
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
