import React from "react";
import { Link } from 'react-router-dom'
import "./StreamItem.css"

class StreamItem extends React.Component {

  render() {
  	const videoId = this.props.data.id.videoId;
  	const snippet = this.props.data.snippet
  	const thumbnail = snippet.thumbnails.default
    return(
      <a href={`/watch/${videoId}`} className="list-group-item">
  		<img className="StreamItem-thumbnail" src={`${thumbnail.url}`} align="left" />
  		<div className="StreamItem-info">
  			<h4>{snippet.title}</h4>
  			<p>{snippet.description}</p>
  		</div>
      </a>
    );
  }
}

export default StreamItem;