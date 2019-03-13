import React from "react";
import "./Feed.css";
import FeedItem from "../FeedItem/FeedItem";

const Feed = props => {
  let array = [];
  props.images.forEach(cur => {
    array.push(<FeedItem text={cur.text} url={cur.url} />);
  });

  return <div className="Feed">{array}</div>;
};

export default Feed;
