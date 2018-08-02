import React from "react";
import { render } from "react-dom";

class Message extends React.Component {

  render() {
  	const data = this.props.data;
    return(
      <div>{data.username}: {data.text}</div>
    );
  }
}

export default Message;