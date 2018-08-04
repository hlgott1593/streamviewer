import React from "react";
import { Link } from 'react-router-dom'

class StreamHeader extends React.Component {

  render() {
  	const name = this.props.name;
  	const videoId = this.props.videoId;
    return(
      <div>
      	<h2>{name}</h2>
      	<Link to={`/stats/${videoId}`}>Stats</Link>
      </div>
    );
  }
}

export default StreamHeader;