import React from "react";
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import Message from './Message';
import './ChatBox.css'

class ChatBox extends React.Component {

  componentsDidMount() {

  }
  
  render() {
  	const messages = this.props.messages;
	return(
	  <div>
	  	<div className="scrollable">
	  		<MessageList messages={messages} />
	  	</div>
	  	<MessageForm />
	  </div>
	);
  }
}

export default ChatBox;