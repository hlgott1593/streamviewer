import React from "react";
import { Link } from 'react-router-dom'

class StreamHeader extends React.Component {

  render() {
  	const details = this.props.details;
    return(
      <div>
      	<h4>{details.snippet.channelTitle}</h4>
        <p>{details.snippet.description}</p>
        <label>Live Since: {details.snippet.publishedAt}</label>
        <p>{details.snippet.tags}</p>
      </div>
    );
  }
}

export default StreamHeader;


// {
//   "liveStreamingDetails": {
//     "concurrentViewers": "5290",
//     "actualStartTime": "2018-08-01T10:19:52.000Z",
//     "activeLiveChatId": "EiEKGFVDU0o0Z2tWQzZOcnZJSTh1bXp0ZjBPdxIFL2xpdmU"
//   },
//   "kind": "youtube#video",
//   "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/P4HE6TYoRKGMM3NE-HElSOf5Riw\"",
//   "id": "9ywjjWAkeL0",
//   "snippet": {
//     "localized": {
//       "title": "lofi hip hop radio - beats to relax/study to",
//       "description": "Thank you for listening, I hope you will have a good time here :)\n\n🎼 Listen to the radio offline with my Spotify playlist \n→ http://bit.ly/chilledcowradio\n\n👕 ChilledCow shop\n→ http://bit.ly/chilledcowmerch\n\n🎧 My secondary channel\n→ http://bit.ly/Lopheemusic\n\n🎧 ChilledCow\n→ http://bit.ly/chilledcowfacebook\n→ http://bit.ly/chilledcowspotify\n→ http://bit.ly/chilledcowtwitter\n→ http://bit.ly/chilledcowsoundcloud\n\n📌Update \n-30/07/2018 New beats added\n\n🎶 Full playlist/support beatmakers (30/07/2018)\n→ http://bit.ly/Radioplaylist\n\n🎨 Illustration & Animation by Juan Pablo Machado\n→ http://bit.ly/Machadofb\n→ http://machado.portfoliobox.io/\n→ http://jpmachado.art\n\n💡 Any idea or recommendation to improve the radio? \n→ contact@thechilledcow.com\n\n📝 Submissions\n→  Artwork : artwork@thechilledcow.com\n→  Music : https://soundcloud.com/chilledcow"
//     },
//     "channelId": "UCSJ4gkVC6NrvII8umztf0Ow",
//     "thumbnails": {
//       "default": {
//         "height": 90,
//         "url": "https://i.ytimg.com/vi/9ywjjWAkeL0/default_live.jpg",
//         "width": 120
//       },
//       "medium": {
//         "height": 180,
//         "url": "https://i.ytimg.com/vi/9ywjjWAkeL0/mqdefault_live.jpg",
//         "width": 320
//       },
//       "high": {
//         "height": 360,
//         "url": "https://i.ytimg.com/vi/9ywjjWAkeL0/hqdefault_live.jpg",
//         "width": 480
//       },
//       "maxres": {
//         "height": 720,
//         "url": "https://i.ytimg.com/vi/9ywjjWAkeL0/maxresdefault_live.jpg",
//         "width": 1280
//       },
//       "standard": {
//         "height": 480,
//         "url": "https://i.ytimg.com/vi/9ywjjWAkeL0/sddefault_live.jpg",
//         "width": 640
//       }
//     },
//     "categoryId": "10",
//     "channelTitle": "ChilledCow",
//     "publishedAt": "2018-08-01T10:19:45.000Z",
//     "title": "lofi hip hop radio - beats to relax/study to",
//     "liveBroadcastContent": "live",
//     "description": "Thank you for listening, I hope you will have a good time here :)\n\n🎼 Listen to the radio offline with my Spotify playlist \n→ http://bit.ly/chilledcowradio\n\n👕 ChilledCow shop\n→ http://bit.ly/chilledcowmerch\n\n🎧 My secondary channel\n→ http://bit.ly/Lopheemusic\n\n🎧 ChilledCow\n→ http://bit.ly/chilledcowfacebook\n→ http://bit.ly/chilledcowspotify\n→ http://bit.ly/chilledcowtwitter\n→ http://bit.ly/chilledcowsoundcloud\n\n📌Update \n-30/07/2018 New beats added\n\n🎶 Full playlist/support beatmakers (30/07/2018)\n→ http://bit.ly/Radioplaylist\n\n🎨 Illustration & Animation by Juan Pablo Machado\n→ http://bit.ly/Machadofb\n→ http://machado.portfoliobox.io/\n→ http://jpmachado.art\n\n💡 Any idea or recommendation to improve the radio? \n→ contact@thechilledcow.com\n\n📝 Submissions\n→  Artwork : artwork@thechilledcow.com\n→  Music : https://soundcloud.com/chilledcow",
//     "tags": [
//       "lo-fi",
//       "lo fi",
//       "lofi",
//       "lofi hiphop",
//       "lo-fi hiphop",
//       "lo fi hiphop",
//       "hiphop",
//       "hip hop",
//       "lofi hip hop",
//       "lo-fi hip hop",
//       "lo fi hip hop",
//       "lofi radio",
//       "lo-fi radio",
//       "lo fi radio",
//       "lofi hip hop radio",
//       "lo-fi hip hop radio",
//       "lo fi hip hop radio",
//       "chilledcow",
//       "chilled cow",
//       "chilledcow radio",
//       "chilled cow radio",
//       "chilledcow station",
//       "lofi radio chilledcow",
//       "chillhop",
//       "study music",
//       "lofi hip hop radio - beats to relax/study to",
//       "beats to relax",
//       "music to study",
//       "radio",
//       "relaxing music",
//       "mood music"
//     ]
//   }
// }