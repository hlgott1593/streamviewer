import React from "react";
import "./MessageForm.css";
import Utils from "../Utils"

class MessageForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
    // bind functions
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    //on mount load api data
    this.sendMessage()
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  
  sendMessage() {
    const url = Utils.getBaseURL() + '/api/messages';
    // send message to live chat
    Utils.APIPost(url, 
      {
        token: this.props.token,
        messageText: this.state.input,
        liveChatId: this.state.streamInfo.liveChatId
      },
      function(jsonData) {
        // handle video data
        console.log(jsonData);
        // if (jsonData.status == "SUCCESS") {
        //   self.setState({
        //     chatMessages: jsonData.messages
        //   });
        //   setTimeout(
        //     loadMessages.bind(jsonData.nextPageToken), 
        //     jsonData.pollingIntervalMillis
        //   );
        // }
      },
      function(jsonData) {
        //handle errors
        console.log(jsonData)
      }
    );
  }

  render() {
    return(
      <div>
      	<form onSubmit={this.handleSubmit}>
		  <input value={this.state.value} onChange={this.handleChange}
      type="text" className="MessageForm-input form-control" placeholder="Enter message..." />
		  <button type="submit" className="btn btn-primary">Send</button>
		 
	
		</form>
      </div>
    );
  }
}

export default MessageForm;