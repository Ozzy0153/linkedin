import React from "react";
import "./Feeds.css";
import Feed from "./Feed";
import HomeFeedData from "../../FackApis/HomeFeedData";

function Feeds() {
  return (
      <div className="feeds">
        {HomeFeedData.map(fed => (
            <Feed fed={fed} key={fed.id}/>
        ))}
      </div>
  );
}

export default Feeds;
