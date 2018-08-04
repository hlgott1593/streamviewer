import React from "react";
import { Link } from 'react-router-dom'

class ListItem extends React.Component {

  render() {
  	const videoId = this.props.data.id.videoId;
  	const snippet = this.props.data.snippet
  	const thumbnail = snippet.thumbnails.default
    return(
      <li>
  		<img src={`${thumbnail.url}`} />
  		<div>
  			<Link to={`/watch/${videoId}`} >{snippet.title}</Link>
  			<label>{snippet.description}</label>
  			<label>{snippet.publishedAt}</label>
  		</div>
      </li>
    );
  }
}

export default ListItem;