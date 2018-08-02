import React from "react";
import { render } from "react-dom";
import StreamList from "../components/StreamList";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      streamList: [{'name': 'test1', 'videoId': 'c6VNRK3cXKM'}]
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