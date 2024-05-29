import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faBars,
  faBell,
  faEnvelope,
  faHome,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Darkmode from "../darkmod/Darkmode";
import CurrentUser from "../../FackApis/CurrentUserData";

function Navbar() {
  const currentUser = CurrentUser[0];
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    const address = localStorage.getItem("walletAddress");
    if (address) {
      setWalletAddress(address);
    }
  }, []);

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/">
            <h3 className="logo">Web3</h3>
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <Link to="/profile/id">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <div className="Nav-Searchbar">
            <FontAwesomeIcon icon={faSearch} />
            <input type="search" />
          </div>
        </div>

        <div className="nav-right">
          <Link to="/chatbox/id">
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
          <Link to="/chatbox/id">
            <FontAwesomeIcon icon={faBell} />
          </Link>
          <Darkmode />
          <Link to="/chatbox/id">
            <FontAwesomeIcon icon={faBars} />
          </Link>
          <div className="user">
            <img src={currentUser.ProfieImage} alt="" />
            <h4>{walletAddress}</h4>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
