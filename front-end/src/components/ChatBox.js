import React from "react";
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import Message from './Message';
import './ChatBox.css'
import Utils from "../Utils"

class ChatBox extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
    //ref scroll container
    this.messageContainer = React.createRef();
    // bind functions
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidUpdate() {
  	scrollToBottom();
  }

  sendMessage(messageText) {
  	console.log(this);
  	console.log(messageText);
    const url = Utils.getBaseURL() + '/api/messages';
    // send message to live chat
    console.log(url);
    Utils.APIPost(url, 
      {
        token: this.props.token,
        messageText: messageText,
        liveChatId: this.props.liveChatId
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

  scrollToBottom() {
  	console.log(this.messageContainer.scrollTop);
    this.messageContainer.scrollTop = this.messageContainer.scrollHeight;
  }

  render() {
  	const messages = this.props.messages;
	return(
	  <div className="ChatBox-container">
	  	<div ref={this.messageContainer} className="scrollable">
	  		<MessageList messages={messages} />
	  	</div>
	  	<MessageForm  submitForm={this.sendMessage}/>
	  </div>
	);
  }
}

export default ChatBox;