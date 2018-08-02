import React from "react";
import { render } from "react-dom";
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import Message from './Message';

class ChatBox extends React.Component {

  componentsDidMount() {

  }
  
  render() {
  	const messages = this.props.messages;
	return(
	  <div>
	  	<MessageList messages={messages} />
	  	<MessageForm />
	  </div>
	);
  }
}

export default ChatBox;