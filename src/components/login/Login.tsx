import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { useWeb3React } from "@web3-react/core";
import Wallet from "../Wallet/Wallet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const { connector, hooks } = useWeb3React();

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h2>Web3</h2>
          <p>
            Lorem ipsum dolor dipisicing elit. Odit dignissimos maxime voluptate
            laborum amet delectus asperiores quaerat deserunt nulla ea!
          </p>
          <span>Don't have an account?</span>

          <span className="btn">
            Create one
            {<FontAwesomeIcon icon={faArrowRight} className="icon-margin" />}
          </span>
        </div>
        <form className="right">
          <input type="text" placeholder="username" />
          <Wallet connector={connector} hooks={hooks} name="phantom" />
        </form>
      </div>
    </div>
  );
}

export default Login;
