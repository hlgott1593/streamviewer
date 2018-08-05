import React from "react";
import "./MessageForm.css";

class MessageForm extends React.Component {

  render() {
    return(
      <div>
      	<form>
		  <input type="text" className="MessageForm-input form-control" placeholder="Enter message..." />
		  <button type="submit" className="btn btn-primary">Send</button>
		 
	
		</form>
      </div>
    );
  }
}

export default MessageForm;