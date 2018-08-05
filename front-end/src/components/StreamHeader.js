import React from "react";
import { Link } from 'react-router-dom'
import "./StreamHeader.css"

class StreamHeader extends React.Component {

  render() {
    const title = this.props.title
  	const videoId = this.props.videoId;
    const navName = this.props.navName;
    const link = this.props.link;
    return(
      <div className="StreamHeader-container">
        <a href={link} className="StreamHeader-nav btn btn-primary" 
          role="button">{navName}</a>
      	<h2 className="StreamHeader-title">{title}</h2>    
      </div>
    );
  }
}

export default StreamHeader;