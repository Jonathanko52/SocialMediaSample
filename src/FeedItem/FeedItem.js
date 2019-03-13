import React, { Component } from "react";
import "./FeedItem.css";

class FeedItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  render() {
    return (
      <div className="FeedItem">
        <p>{this.props.text}</p>
        <img src={this.props.url} />
      </div>
    );
  }
}

export default FeedItem;
