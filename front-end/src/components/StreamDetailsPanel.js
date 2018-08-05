import React from "react";
import { Link } from 'react-router-dom'

class StreamHeader extends React.Component {

  render() {
  	const details = this.props.details;
    return(
      <div>
      	<h4>{details.channelTitle}</h4>
        <p>{details.description}</p>
        <label>Live Since: {details.publishedAt}</label>
        <p>{details.tags}</p>
      </div>
    );
  }
}

export default StreamHeader;