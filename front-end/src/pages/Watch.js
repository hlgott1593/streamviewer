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
      streamInfo: null,
      chatMessages: []
    };
  }

  componentDidMount() {
  	//on mount load api data
    //const streamInfo = {"status": "SUCCESS", "streamInfo": {"kind": "youtube#video", "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/Ntt2xP9B-XCBa_hiaN6ADkyZ_tw\"", "snippet": {"localized": {"title": "World Of Walker (24/7 Live Radio)", "description": "Hey Walkers, listen to my live radio. Feel free to chat and I'll see you in here once in a while.\n/ Alan\n\n #WorldOfWalker \n\nChat rules:\n*No negativity towards anyone\n*Keep it a family environment, we are all Walkers\n*Don't spam or use excessive caps\n*Excessive use of vulgar/foul language will get you banned. \n*In other words, just be nice\n\nThis radio consists of my music, my remixes as well as other stuff I like & listen to. Updated as often as I can. If you have any questions, suggestions or problems, let us know: (ONLY related to the radio) radio@alanwalker.no\n\nLabels & artists, get in touch for considerations.\n\nFollow me:\nFacebook: http://bit.ly/AlanWalker_Facebook\nInstagram: http://bit.ly/AlanWalker_Instagram\nTwitter: http://bit.ly/AlanWalker_Twitter\nSnapchat: alanwalkermusic\nSpotify: http://spoti.fi/2zHgsMa\n\nSubscribe to my channel here: http://bit.ly/2AoyWCf"}, "categoryId": "10", "liveBroadcastContent": "live", "tags": ["Alan Walker", "Alan", "Walker", "LIVE", "Faded", "Bergen", "Alone", "House", "Techno", "Remix", "Concert", "Heading Home"], "channelTitle": "Alan Walker", "channelId": "UCJrOtniJ0-NWz37R30urifQ", "publishedAt": "2018-05-22T21:58:11.000Z", "description": "Hey Walkers, listen to my live radio. Feel free to chat and I'll see you in here once in a while.\n/ Alan\n\n #WorldOfWalker \n\nChat rules:\n*No negativity towards anyone\n*Keep it a family environment, we are all Walkers\n*Don't spam or use excessive caps\n*Excessive use of vulgar/foul language will get you banned. \n*In other words, just be nice\n\nThis radio consists of my music, my remixes as well as other stuff I like & listen to. Updated as often as I can. If you have any questions, suggestions or problems, let us know: (ONLY related to the radio) radio@alanwalker.no\n\nLabels & artists, get in touch for considerations.\n\nFollow me:\nFacebook: http://bit.ly/AlanWalker_Facebook\nInstagram: http://bit.ly/AlanWalker_Instagram\nTwitter: http://bit.ly/AlanWalker_Twitter\nSnapchat: alanwalkermusic\nSpotify: http://spoti.fi/2zHgsMa\n\nSubscribe to my channel here: http://bit.ly/2AoyWCf", "title": "World Of Walker (24/7 Live Radio)", "thumbnails": {"medium": {"url": "https://i.ytimg.com/vi/C6brqAkArmA/mqdefault_live.jpg", "width": 320, "height": 180}, "default": {"url": "https://i.ytimg.com/vi/C6brqAkArmA/default_live.jpg", "width": 120, "height": 90}, "maxres": {"url": "https://i.ytimg.com/vi/C6brqAkArmA/maxresdefault_live.jpg", "width": 1280, "height": 720}, "high": {"url": "https://i.ytimg.com/vi/C6brqAkArmA/hqdefault_live.jpg", "width": 480, "height": 360}, "standard": {"url": "https://i.ytimg.com/vi/C6brqAkArmA/sddefault_live.jpg", "width": 640, "height": 480}}}, "liveStreamingDetails": {"actualStartTime": "2018-05-23T05:48:19.000Z", "activeLiveChatId": "EiEKGFVDSnJPdG5pSjAtTld6MzdSMzB1cmlmURIFL2xpdmU", "concurrentViewers": "366"}, "id": "C6brqAkArmA"}};
    this.loadStreamInfo()
  }

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
        console.log(jsonData);
        self.setState({
          streamInfo: jsonData.streamInfo
        });
        // fetch chat messages
        const liveChatId = jsonData.liveStreamingDetails.activeLiveChatId;
        self.loadMessages(liveChatId);
      },
      function(jsonData) {
        console.log(jsonData)
      }
    );
  }

  loadMessages(liveChatId) {
    var self = this;
    const url = Utils.getBaseURL() 
    + '/api/messages?token'
    + this.props.token;
    + '?liveChatId='
    + liveChatId;
    
    //console.log(url); 
    Utils.APIGet(url,
      function(jsonData) {
        // handle video data
        console.log(jsonData)
        self.setState({
          chatMessages: jsonData.messages
        });
      },
      function(jsonData) {
        console.log(jsonData)
      }
    );
  }

  sendMessage() {
    // send message to live chat
  }

  render() {
    const videoId = this.props.match.params.videoId;
    const chatMessages = this.state.chatMessages;
    const streamInfo = this.state.streamInfo;
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <StreamHeader title={streamInfo.snippet.title} link={`/stats/${videoId}`} navName="Stats"/>
          <div className="Watch-stream-container row">
            <div className="col-sm-6">
              <StreamPlayer videoId={videoId} />
            </div>
            <div className="col-sm-6">
              <ChatBox messages={chatMessages} />
            </div>
          </div>
          <StreamDetailsPanel details={streamInfo} />
        </div>
      </div>
    );
  }
}

export default WatchPage;