import React from "react";
import "./Darkmode.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faBars,
  faBell,
  faEnvelope,
  faHome,
  faLightbulb,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

function Darkmode() {
  const DarkHandler = () => {
    document.querySelector("body")?.classList.toggle("darkmod");
  };

  return (
    <div className="dark-mod-icon">
      <FontAwesomeIcon icon={faLightbulb} onClick={DarkHandler} />
    </div>
  );
}

export default Darkmode;
