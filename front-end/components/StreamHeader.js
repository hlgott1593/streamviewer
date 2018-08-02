import React from "react";
import { render } from "react-dom";
import { Link } from 'react-router-dom'

class StreamHeader extends React.Component {

  render() {
  	const name = this.props.name;
  	const videoId = this.props.videoId;
    return(
      <div>
      	<label>{name}</label>
      	<Link to={`/stats/${videoId}`}>Stats</Link>
      </div>
    );
  }
}

export default StreamHeader;