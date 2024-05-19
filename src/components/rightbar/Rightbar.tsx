import React from "react";
import "./Rightbar.css";
import FriendReq from "../friendReq/FriendReq";

function Rightbar() {
  return <div className="rightBar">
    <div className="rightbar-container">
      <FriendReq/>
    </div>
  </div>;
}

export default Rightbar;
