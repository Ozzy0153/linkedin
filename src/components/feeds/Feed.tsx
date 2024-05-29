import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart, faListDots, faShare } from "@fortawesome/free-solid-svg-icons";

type FeedProps = {
  fed: {
    id: number;
    userid: number;
    name: string;
    feedImage: string;
    feedProfile: string;
    desc: string;
  };
};

function Feed({ fed }: FeedProps) {
  return (
      <div className="feed">
        <div className="top-content">
          <Link to={`/profile/${fed.userid}`}>
            <div className="user">
              <img src={fed.feedProfile} alt="" />
              <div>
                <h5>{fed.name}</h5>
                <small>1 minutes ago</small>
              </div>
            </div>
          </Link>

          <span>
          <FontAwesomeIcon icon={faListDots} />
        </span>
        </div>

        <div className="mid-content">
          <p>{fed.desc}</p>
          <img src={fed.feedImage} alt="" />
        </div>
        <div className="bottom-content">
          <div className="action-item">
          <span>
            <FontAwesomeIcon icon={faHeart} />
            14 Likes
          </span>
          </div>
          <div className="action-item">
          <span>
            <FontAwesomeIcon icon={faComment} />2 Comments
          </span>
          </div>
          <div className="action-item">
          <span>
            <FontAwesomeIcon icon={faShare} />1 Share
          </span>
          </div>
        </div>
      </div>
  );
}

export default Feed;
