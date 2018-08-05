import React from "react";
import Message from "./Message";

class MessageList extends React.Component {
  render() {
    const messages = this.props.messages;
    const messageList = messages.map((message) =>
      <Message data={message} />
    );
    return (
      <ul className="list-group">
        {messageList}
      </ul>
    );
  }
}

export default MessageList;