import React from "react";
import ChatBox from "../components/ChatBox";
import StreamPlayer from "../components/StreamPlayer";
import StreamHeader from "../components/StreamHeader";
import StreamDetailsPanel from "../components/StreamDetailsPanel";
import Utils from "../Utils"
import "./Watch.css"

class WatchPage extends React.Component {
  constructor() {
    super();
    this.state = {
      streamInfo: {
        title: '',
        liveChatId: '',
        channelTitle: '',
        description: '',
        publishedAt: '',
        tags: []
      },
      chatMessages: []
    };
    // bind functions
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  	//on mount load api data
    //this.loadMessages(this);
    this.loadStreamInfo()
  }

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  // handleSubmit(event) {
  //   alert('Your favorite flavor is: ' + this.state.value);
  //   event.preventDefault();
  // }

  loadStreamInfo() {
    var self = this;
    const url = Utils.getBaseURL() 
    + '/api/streams/' 
    + this.props.match.params.videoId
    + '?token='
    + this.props.token;
    
    Utils.APIGet(url,
      function(jsonData) {
        // handle video data
        const liveChatId = jsonData.streamInfo.liveStreamingDetails.activeLiveChatId;
        const snippet = jsonData.streamInfo.snippet;
        self.setState({
          streamInfo: {
            title: snippet.title,
            liveChatId: liveChatId,
            channelTitle: snippet.channelTitle,
            description: snippet.description,
            publishedAt: snippet.publishedAt,
            tags: snippet.tags
          }
        }, self.loadMessages.bind(self));
      },
      function(jsonData) {
        //handle errors
        console.log(jsonData)
      }
    );
  }

  loadMessages(nextPageToken) {
    var self = this;
    var url = Utils.getBaseURL() 
    + '/api/messages?liveChatId='
    + self.state.streamInfo.liveChatId
    + '&token='
    + self.props.token;
    if (nextPageToken) {
      url += '&nextPageToken=' + nextPageToken
    }    
    
    Utils.APIGet(url,
      function(jsonData) {
        // handle message data
        if (jsonData.status == "SUCCESS") {
          self.setState((prevState) => ({
              chatMessages: prevState.chatMessages.concat(jsonData.messages)
            }), () => {
              // set timeout based on youtube's interval
              // response of when to poll for messages again
              setTimeout(
                self.loadMessages.bind(self, jsonData.nextPageToken), 
                jsonData.pollingIntervalMillis
              );
            }
          );
        }
      },
      function(jsonData) {
        //handle errors
        console.log(jsonData)
      }
    );
  }

  render() {
    const videoId = this.props.match.params.videoId;
    const chatMessages = this.state.chatMessages;
    const streamInfo = this.state.streamInfo;
    console.log(streamInfo);
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <StreamHeader title={streamInfo.title} link={`/stats/${videoId}`} navName="Stats"/>
          <div className="Watch-stream-container row">
            <div className="col-sm-6">
              <StreamPlayer videoId={videoId} />
            </div>
            <div className="col-sm-6">
              <ChatBox token={this.props.token} 
                liveChatId={streamInfo.liveChatId} 
                messages={chatMessages} />
            </div>
          </div>
          <StreamDetailsPanel details={streamInfo} />
        </div>
      </div>
    );
  }
}

export default WatchPage;