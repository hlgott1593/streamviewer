import React from "react";
import "./Message.css"
class Message extends React.Component {

"authorDetails": {
      "isVerified": false,
      "isChatSponsor": false,
      "channelUrl": "http://www.youtube.com/channel/UCbRc1nVmBaOkZS7onUwUoxw",
      "isChatOwner": false,
      "displayName": "Ace Gaming",
      "profileImageUrl": "https://yt3.ggpht.com/-NPBaFV-tFJI/AAAAAAAAAAI/AAAAAAAAAAA/z0Bn6JQl2PE/s32-c-k-no-mo-rj-c0xffffff/photo.jpg",
      "channelId": "UCbRc1nVmBaOkZS7onUwUoxw",
      "isChatModerator": false
    }

  render() {
  	const snippet = this.props.data.snippet;
  	const authorDetails = this.props.data.authorDetails
    return(
      <li class="list-group-item">
      	<img className="Message-thumbnail" src={`${authorDetails.profileImageUrl}`} />
      	<b>{authorDetails.displayName}</b>: {snippet.displayMessage}
      </li>
    );
  }
}

export default Message;