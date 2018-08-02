import React from "react";
import { render } from "react-dom";
import ChatBox from "../components/ChatBox";
import StreamPlayer from "../components/StreamPlayer";
import StreamHeader from "../components/StreamHeader";

class WatchPage extends React.Component {
  constructor() {
    super();
    this.state = {
      videoInfo: {
        name: 'Test Video'
      },
      chatMessages: [
        {'username': 'aaa', 'text': 'this is a video!'},
        {'username': 'bbbb', 'text': 'test 2'},
        {'username': 'bbbb', 'text': 'test 3'},
        {'username': 'aaddd', 'text': 'test 6??'}
      ]
    };
  }

  componentDidMount() {
  	//on mount load api data
    this.loadMessages()
  }

  loadMessages() {
    // const url = 'https://rocky-eyrie-31084.herokuapp.com/api/message/Cg0KC1J0VV9tZEwydkJN/'
    // fetch(url , {
    //   method: "GET",
    //   mode: 'no-cors',
    //   headers: {
    //     'Access-Control-Allow-Origin': 'http://localhost:3000',
    //     'Access-Control-Allow-Credentials': 'true'
    //   }
    // })
    // .then((response) => {
    //   console.log(response.json());
    //   return response.json();
    // })
    // .then(function(payload) {
    //   console.log(payload)
    //   //handle response
    //   const messageList = payload.messages.map((message) => ({
    //       'username': message.snippet.authorChannelId,
    //       'text': message.snippet.displayMessage
    //     })
    //   );
    //   this.state.setState({
    //     'chatMessages': messageList
    //   });
    // });

  }

  sendMessage() {
    //
    console.log('asdfasdf');
  }

  render() {
    const videoId = this.props.match.params.videoId;
    const chatMessages = this.state.chatMessages;
    const videoInfo = this.state.videoInfo;
    return (
      <div>
        <StreamHeader name={videoInfo.name} videoId={videoId} />
        <div className="row">
          <div className="col-sm-8">
            <StreamPlayer videoId={videoId} />
          </div>
          <div className="col-sm-4">
            <ChatBox messages={chatMessages} />
          </div>
        </div>
      </div>
    );
  }
}

export default WatchPage;