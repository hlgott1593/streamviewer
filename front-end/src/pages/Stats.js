import React from "react";
import StatsSummary from "../components/StatsSummary"
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import StreamHeader from "../components/StreamHeader";
import MessageSearch from "../components/MessageSearch";
import Utils from "../Utils"

class StatsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      streamInfo: {
    "etag": "\"XI7nbFXulYBIpL0ayR_gDh3eu1k/c7jcq_ecwW6JSQYMEVP-sVHPzEc\"",
    "snippet": {
      "liveBroadcastContent": "live",
      "description": "Live (2018) NASA Earth from Space - \"International Astronomy Day\", ISS HD Video is presented. NASA Live stream of Earth seen from space powered by NASA HDEV cameras aboard the International Space Station. Watch the Earth roll Captured by HDEV cameras on board the International Space Station.\n\n▰ Get Live Alerts: (Rocket Launches & Webcasts)\nhttp://bit.ly/spaceuniverse-alerts\n\n▰ Poll Results:\nhttp://bit.ly/spaceuniverse-alerts\n\nUpdates:\n(June 22/23:) A Rocket Lab Electron rocket will launch on its third flight, titled \"It's Business Time,\" from the Mahia Peninsula on New Zealand's North Island. The 4-hour launch window opens at 8:30 p.m. EDT (0300 GMT on June 23). \n\n(July 25:) Arianespace will use an Ariane 5 ES rocket to launch four Galileo satellites for Europe's Galileo navigation constellation. The rocket will launch from Kourou, French Guiana at 7:24 a.m. EDT (1124 GMT).\n\n(July 27/28:) A total lunar eclipse, also known as a \"blood moon,\" will be visible from Europe, Asia, Australia, Africa, the Atlantic, the Indian Ocean and Antarctica. [Lunar Eclipse 2018 Guide]\n\n(Aug. 13:) The Perseid meteor shower will peak before dawn in the early morning hours of Monday, Aug. 13.\n\n\n▰ 2018 Upcoming Events (Full list): \nhttps://goo.gl/VXUmMW\n\nNASA Crew inside the international space station:\nOleg Artemyev\nCommander Drew Feustel\nRicky Arnold\nSergey Prokopyev\nAlexander Gerst\nSerena Auñón-Chancellor\n\nMission Overview\n3/21/18 - Exp 55/56 Launch\n3/23/18 - Exp 55/56 Dock\n6/6/18 - Exp 56/57 Launch\n6/8/18 - Exp 56/57 Dock\n6/14/18 - U.S. Spacewalk (6:49)\n10/4/18 - Exp 55/56 Land\n12/13/18 - Exp 56/57 Land\n\n\nBy the courtesy of International Space Station:\nUStream live Feed From the NASA HDEV live cameras aboard the ISS. Watch the earth roll \nhttps://www.nasa.gov\nhttps://spaceofficial.com\nSPACE & UNIVERSE Network \n\nThe International Space Station - ISS - circles the earth at 240 miles above the planet, on the edge of space in low earth orbit. The station is crewed by NASA astronauts as well as Russian Cosmonauts and a mixture of Japanese, Canadian and European astronauts as well.\n\nPlease Standby mode (Bluescreen) \nThe signal is temporarily lost from the international space station, live on UStream.tv\n\nThe ISS passes into the dark side of the earth for roughly half of each of its 90-minute orbits. As the Space Station passes into a period of night every 45 mins video is unavailable - during this time, and other breaks in transmission recorded footage is shown when back in daylight earth will recommence. As seen from the Nasa ISS live stream on the International Space Station - \nA real astronaut view of Earth! Captured by ISS HDEV cameras on board the International Space Station.\n\nWe love ❤ Space\nDo you?\n\n ┈ \nLive chat:\n- English only. \n- Other languages, special characters, links will be automatically blocked.\nPlease do not share any personal information in Live chat.\n(This stream may upset those who believe in a Theory such as Flat-earth, Please make an effort to share a constructive comment on live chat. www.theguardian.com/science/2016/jan/20/flat-earth-believers-youtube-videos-conspiracy-theorists)\n┈ \nMusic (CC)\n\"Garden Music\" Kevin MacLeod\nhttp://incompetech.com/music/royalty-free/\nhttps://incompetech.com/wordpress/2015/12/garden-music/\n\n\"Fluidscape\" Kevin MacLeod \nhttp://incompetech.com/music/royalty-free/",
      "channelTitle": "SPACE & UNIVERSE (Official)",
      "localized": {
        "title": "NASA Live - Earth From Space (HDVR) ♥ ISS LIVE FEED #AstronomyDay2018 | Subscribe now!",
        "description": "Live (2018) NASA Earth from Space - \"International Astronomy Day\", ISS HD Video is presented. NASA Live stream of Earth seen from space powered by NASA HDEV cameras aboard the International Space Station. Watch the Earth roll Captured by HDEV cameras on board the International Space Station.\n\n▰ Get Live Alerts: (Rocket Launches & Webcasts)\nhttp://bit.ly/spaceuniverse-alerts\n\n▰ Poll Results:\nhttp://bit.ly/spaceuniverse-alerts\n\nUpdates:\n(June 22/23:) A Rocket Lab Electron rocket will launch on its third flight, titled \"It's Business Time,\" from the Mahia Peninsula on New Zealand's North Island. The 4-hour launch window opens at 8:30 p.m. EDT (0300 GMT on June 23). \n\n(July 25:) Arianespace will use an Ariane 5 ES rocket to launch four Galileo satellites for Europe's Galileo navigation constellation. The rocket will launch from Kourou, French Guiana at 7:24 a.m. EDT (1124 GMT).\n\n(July 27/28:) A total lunar eclipse, also known as a \"blood moon,\" will be visible from Europe, Asia, Australia, Africa, the Atlantic, the Indian Ocean and Antarctica. [Lunar Eclipse 2018 Guide]\n\n(Aug. 13:) The Perseid meteor shower will peak before dawn in the early morning hours of Monday, Aug. 13.\n\n\n▰ 2018 Upcoming Events (Full list): \nhttps://goo.gl/VXUmMW\n\nNASA Crew inside the international space station:\nOleg Artemyev\nCommander Drew Feustel\nRicky Arnold\nSergey Prokopyev\nAlexander Gerst\nSerena Auñón-Chancellor\n\nMission Overview\n3/21/18 - Exp 55/56 Launch\n3/23/18 - Exp 55/56 Dock\n6/6/18 - Exp 56/57 Launch\n6/8/18 - Exp 56/57 Dock\n6/14/18 - U.S. Spacewalk (6:49)\n10/4/18 - Exp 55/56 Land\n12/13/18 - Exp 56/57 Land\n\n\nBy the courtesy of International Space Station:\nUStream live Feed From the NASA HDEV live cameras aboard the ISS. Watch the earth roll \nhttps://www.nasa.gov\nhttps://spaceofficial.com\nSPACE & UNIVERSE Network \n\nThe International Space Station - ISS - circles the earth at 240 miles above the planet, on the edge of space in low earth orbit. The station is crewed by NASA astronauts as well as Russian Cosmonauts and a mixture of Japanese, Canadian and European astronauts as well.\n\nPlease Standby mode (Bluescreen) \nThe signal is temporarily lost from the international space station, live on UStream.tv\n\nThe ISS passes into the dark side of the earth for roughly half of each of its 90-minute orbits. As the Space Station passes into a period of night every 45 mins video is unavailable - during this time, and other breaks in transmission recorded footage is shown when back in daylight earth will recommence. As seen from the Nasa ISS live stream on the International Space Station - \nA real astronaut view of Earth! Captured by ISS HDEV cameras on board the International Space Station.\n\nWe love ❤ Space\nDo you?\n\n ┈ \nLive chat:\n- English only. \n- Other languages, special characters, links will be automatically blocked.\nPlease do not share any personal information in Live chat.\n(This stream may upset those who believe in a Theory such as Flat-earth, Please make an effort to share a constructive comment on live chat. www.theguardian.com/science/2016/jan/20/flat-earth-believers-youtube-videos-conspiracy-theorists)\n┈ \nMusic (CC)\n\"Garden Music\" Kevin MacLeod\nhttp://incompetech.com/music/royalty-free/\nhttps://incompetech.com/wordpress/2015/12/garden-music/\n\n\"Fluidscape\" Kevin MacLeod \nhttp://incompetech.com/music/royalty-free/"
      },
      "categoryId": "28",
      "title": "NASA Live - Earth From Space (HDVR) ♥ ISS LIVE FEED #AstronomyDay2018 | Subscribe now!",
      "thumbnails": {
        "medium": {
          "width": 320,
          "url": "https://i.ytimg.com/vi/RtU_mdL2vBM/mqdefault_live.jpg",
          "height": 180
        },
        "high": {
          "width": 480,
          "url": "https://i.ytimg.com/vi/RtU_mdL2vBM/hqdefault_live.jpg",
          "height": 360
        },
        "default": {
          "width": 120,
          "url": "https://i.ytimg.com/vi/RtU_mdL2vBM/default_live.jpg",
          "height": 90
        }
      },
      "channelId": "UCIR_LPmEQ9QHR0yB2lxgaxQ",
      "tags": [
        "nasa live",
        "live space",
        "earth from space",
        "live",
        "earth",
        "space",
        "nasa",
        "space video",
        "iss live",
        "iss live stream",
        "iss live feed",
        "space station",
        "iss",
        "nasa video",
        "space live",
        "nasa live stream",
        "earth live",
        "live earth",
        "live iss",
        "space station live",
        "earth from space live",
        "nasa videos of space",
        "live iss stream",
        "youtube live",
        "live youtube",
        "international space station",
        "galaxy",
        "mars",
        "alien",
        "hd",
        "video",
        "flat earth",
        "Debunk Flat Earth",
        "How the Universe Works",
        "National Geographic",
        "documentary 2017"
      ],
      "defaultAudioLanguage": "en",
      "publishedAt": "2017-04-04T21:29:04.000Z"
    },
    "id": "RtU_mdL2vBM",
    "statistics": {
      "viewCount": "82891733",
      "commentCount": "397",
      "likeCount": "1488999",
      "dislikeCount": "79085",
      "favoriteCount": "0"
    },
    "kind": "youtube#video",
    "liveStreamingDetails": {
      "actualStartTime": "2017-04-04T21:38:21.585Z",
      "concurrentViewers": "329",
      "activeLiveChatId": "Cg0KC1J0VV9tZEwydkJN",
      "scheduledStartTime": "2017-04-04T22:00:00.000Z"
    },
    "contentDetails": {
      "caption": "false",
      "licensedContent": true,
      "duration": "PT0S",
      "dimension": "2d",
      "definition": "sd",
      "projection": "rectangular"
    }
  },
      messageSearchResults: [],
      messagesByUser: [
        {
          'username': 'test',
          'count': '2'
        },
        {
          'username': 'test2',
          'count': '5'
        },
        {
          'username': 'test8',
          'count': '1'
        }
      ]

  };
  }

  componentDidMount() {
    //get video info from videoId
    this.loadVideoStats();
    this.loadMessageCountByUser();
    
  }

  loadVideoStats() {
    const url = Utils.getBaseURL() 
    + '/api/streams/' 
    + this.props.match.params.videoId
    + '?token='
    + this.props.token;
    //console.log(url); 
    Utils.APIGet(url,
      function(jsonData) {
        // handle video data
        console.log(jsonData)
      },
      function(jsonData) {
        console.log(jsonData)
      }
    );
    // fetch(url, {
    //   method: 'POST', // or 'PUT'
    //   body: JSON.stringify(data), // data can be `string` or {object}!
    //   headers:{
    //     'Content-Type': 'application/json'
    //   }
    // }).then(res => res.json())
    // .catch(error => console.error('Error:', error))
    // .then(response => console.log('Success:', response));
    
  
    // fetch(
    //   `${endPoint}/stats?video_id=${videoId}&filter=${filter}`,
    // ).then(response => (
    //   response.json()
    // )).then(callback)
  }

  loadMessageCountByUser() {
    const url = Utils.getBaseURL() 
      + '/api/message/byuser?token='
      + this.props.token
      + '&videoId='
      + this.props.match.params.videoId
    //console.log(url); 
    Utils.APIGet(url,
      function(jsonData) {
        // handle video data
        console.log(jsonData)
      },
      function(jsonData) {
        console.log(jsonData)
      }
    )
  }

  // TEMP
  makeData() {
    return [
      {
        username: "test1",
        messageCount: 8
      },
      {
        username: "ffff",
        messageCount: 3
      },
      {
        username: "aaa",
        messageCount: 1
      }
    ]
  }

  render() {
    const messagesByUser = this.state.messagesByUser;
    const columns = [
      {
        Header: "Username",
        accessor: "username"
      },
      {
        Header: "Message Count",
        accessor: "count"
      }
    ];
    const defaultSorting = [
      {
        id: "count",
        desc: true
      }
    ];

    const videoInfo = this.state.streamInfo;
    const videoId = this.props.match.params.videoId;

    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <StreamHeader title={videoInfo.snippet.title} link={`/watch/${videoId}`} navName="Watch"/>
          <StatsSummary statistics={videoInfo.statistics}/>
          <div className="row">
            <div className="col-sm-6">
              <ReactTable
                data={messagesByUser}
                columns={columns}
                defaultSorted={defaultSorting}
                defaultPageSize={10}
                className="-striped -highlight"
              />
            </div>
            <div className="col-sm-6">
              <MessageSearch />
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default StatsPage;