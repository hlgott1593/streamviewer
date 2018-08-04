import React from "react";

class MessageForm extends React.Component {

  render() {
    return(
      <div>
	      <input  type="text" placeholder="Enter message..."/>
	      <button type="submit">Send</button>
      </div>
    );
  }
}

export default MessageForm;