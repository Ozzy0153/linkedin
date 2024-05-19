import React from "react";
import "./FriendReq.css";

import { Link } from "react-router-dom";

import FriendReqData from "../../FackApis/FirendReqData";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";

function FriendReq() {
  return (
    <div className="Friend-Requests">
        <div className="friend-top">
            <h4>Friend Requests</h4>
        </div>
      {FriendReqData.map((friend) => (
        <div className="request">
          <Link to="/profile/id">
            <div className="info" key={friend.id}>
              <div className="user">
                <img src={friend.img} alt="" />
                  <h5>{friend.name}</h5>
              </div>
              <div className="info-name">
                <p>{friend.info}</p>
              </div>
            </div>
          </Link>

          <div className="action">
            <button className="btn btn-primary">Accept</button>
            <button className="btn btn-red">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FriendReq;
