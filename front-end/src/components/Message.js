import React from "react";
import "./Message.css"
class Message extends React.Component {

  render() {
  	const snippet = this.props.data.snippet;
  	const authorDetails = this.props.data.authorDetails
    return(
      <li class="list-group-item">
      	<img className="Message-thumbnail" src={`${authorDetails.profileImageUrl}`} />
      	<b>{authorDetails.displayName}</b>: {snippet.displayMessage}
      </li>
    );
  }
}

export default Message;