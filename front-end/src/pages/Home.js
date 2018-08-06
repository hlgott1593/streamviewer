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
    this.loadLiveStreams();
  }

  loadLiveStreams() {
    var self = this;
    const url = Utils.getBaseURL() 
      + '/api/streams?token=' 
      + this.props.token;
    // get list of live streams from backend
    Utils.APIGet(url,
      function(jsonData) {
        // handle list data
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