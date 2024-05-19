import React from "react";
import "./Addpost.css";

import CurrentUserdData from "../../FackApis/CurrentUserData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faSmile,
  faTags,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

function Addpost() {
  const currentUser = CurrentUserdData[0];

  return (
    <form className="postForm">
      <div className="user form-top">
        <img src={currentUser.ProfieImage} alt="" />
        <input type="text" placeholder="What's on your mind?" />
        <button type="submit" className="btn btn-primary">Post</button>
      </div>
      <div className="post-categories">
        <label htmlFor="file">
          <input type="file" id="file"/>
          <span>
            <FontAwesomeIcon icon={faImage} /> Photos
          </span>
          
        </label>
        <label htmlFor="file" >
          <input type="file"  id="file"/>
          <span>
            <FontAwesomeIcon icon={faVideo} /> Videos
          </span> 
        </label>
        <span>
          <FontAwesomeIcon icon={faTags} /> Tag
        </span>
        <span>
          <FontAwesomeIcon icon={faSmile} /> Feelings
        </span>
      </div>
    </form>
  );
}

export default Addpost;
