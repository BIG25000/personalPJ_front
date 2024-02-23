import React from "react";

import Dropdown from "./Dropdown";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "../config/axios";
import { useState } from "react";
import useAuth from "../hooks/use-auth";
import { useLocation } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();

  const updateStatus = async () => {
    await axios.patch("/updateStatus");
  };

  useEffect(() => updateStatus(), []);

  const { sh, handleSh, shD, handleShD, setShd } = useAuth();

  return (
    <div className="navbar bg-greenOne text-egg">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl text-egg">
          เดินปะ
        </Link>

        {pathname == "/allTrip" ? (
          <>
            <Search onSh={handleSh} sh={sh} type="text" />
            <Search onSh={handleShD} sh={shD} type="date" />
            <button onClick={() => setShd("")}>RESETDATE</button>
          </>
        ) : null}
      </div>
      <div className="justify-self-end">
        <Dropdown />
      </div>
    </div>
  );
}

export default Header;
