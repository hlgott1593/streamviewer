import React from "react";
import { render } from "react-dom";
import { Link } from 'react-router-dom'

class ListItem extends React.Component {

  render() {
  	const videoId = this.props.data.videoId;
  	const name = this.props.data.name;

    return(
      <li>
      	<Link to={`/watch/${videoId}`} >{name}</Link>
      </li>
    );
  }
}

export default ListItem;