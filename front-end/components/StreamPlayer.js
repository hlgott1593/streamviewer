import React from "react";
import { render } from "react-dom";

class StreamPlayer extends React.Component {

  render() {
    return(
    	<iframe width="420" height="315"
			src="https://www.youtube.com/embed/{this.props.videoId}">
		</iframe>
    );
  }
}

export default StreamPlayer;