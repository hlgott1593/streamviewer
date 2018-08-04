import React from "react";

class Message extends React.Component {

  render() {
  	const snippet = this.props.data.snippet;
    return(
      <div>{snippet.publishedAt}: {snippet.displayMessage}</div>
    );
  }
}

export default Message;