import React from "react";
import StreamList from "../components/StreamList";
import Utils from "../Utils"

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      streamList: []
    };
  }

  componentDidMount() {
  	//do api call to live streams
    // this.setState({
    //   streamList: [
    //     {'name': 'test1', 'video_id': '1'},
    //     {'name': 'test2', 'video_id': '2'},
    //     {'name': 'test3', 'video_id': '3'},
    //     {'name': 'test4', 'video_id': '4'}
    //   ]
    // });
    this.loadLiveStreams();
  }

  loadLiveStreams() {
    var self = this;
    const url = Utils.getBaseURL() 
      + '/api/streams?token=' 
      + this.props.token;
    Utils.APIGet(url,
      function(jsonData) {
        // handle list data
        console.log(jsonData)
        self.setState({
          streamList: jsonData.streams
        });
      },
      function(jsonData) {
        // handle error
        console.log(jsonData)
      }
    );
  }

  render() {
    const { streamList } = this.state;
    return (
      <div>
        <StreamList streams={streamList} />
      </div>
    );
  }
}

export default HomePage;