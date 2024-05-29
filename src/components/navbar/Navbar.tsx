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

function Navbar() {
  const [walletAddress, setWalletAddress] = useState("");
  const [username, setUsername] = useState("");
  const [profilePic, setProfilePic] = useState("");

  useEffect(() => {
    const address = localStorage.getItem("walletAddress");
    const storedUsername = localStorage.getItem("username");
    const storedProfilePic = localStorage.getItem("profilePic");

    if (address) {
      setWalletAddress(address);
    }
    if (storedUsername) {
      setUsername(storedUsername);
    }
    if (storedProfilePic) {
      setProfilePic(storedProfilePic);
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
              <img src={profilePic || "https://via.placeholder.com/150"} alt="User Avatar" />
              <h4>{username}</h4>
            </div>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
