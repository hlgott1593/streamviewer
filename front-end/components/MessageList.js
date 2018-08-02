import React from "react";
import { render } from "react-dom";
import Message from "./Message";

class MessageList extends React.Component {
  render() {
    const messages = this.props.messages;
    const messageList = messages.map((message) =>
      <Message data={message} />
    );
    return (
      <ul>
        {messageList}
      </ul>
    );
  }
}

export default MessageList;