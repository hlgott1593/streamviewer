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
        title: "",
        liveChatId: "",
        viewCount: "0",
        commentCount: "0",
        likeCount: "0",
        dislikeCount: "0"
      },
      messageSearchResults: [],
      messagesByUser: []
  };
  }

  componentDidMount() {
    //get video info from videoId
    this.loadStreamStats();
    this.loadMessageCountByUser();
    
  }

  loadStreamStats() {
    var self = this;
    const url = Utils.getBaseURL() 
    + '/api/streams/' 
    + this.props.match.params.videoId
    + '?token='
    + this.props.token;
    //console.log(url); 
    Utils.APIGet(url,
      function(jsonData) {
        // handle video data
        const liveChatId = jsonData.streamInfo.liveStreamingDetails.activeLiveChatId;
        self.setState({
          streamInfo: {
            title: jsonData.streamInfo.snippet.title,
            liveChatId: liveChatId,
            viewCount: jsonData.streamInfo.statistics.viewCount,
            commentCount: jsonData.streamInfo.statistics.commentCount,
            likeCount: jsonData.streamInfo.statistics.likeCount,
            dislikeCount: jsonData.streamInfo.statistics.dislikeCount
          }
        }, 
        //get messages by user
        this.loadMessageCountByUser);
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
    var self = this;
    const url = Utils.getBaseURL() 
      + '/api/messages/groupbyuser?token='
      + this.props.token
      + '&liveChatId='
      + this.state.liveChatId;
    console.log(url); 
    Utils.APIGet(url,
      function(jsonData) {
        // handle video data
        console.log(jsonData)
        if (jsonData.status == 'SUCCESS') {
          self.setState({
            messagesByUser: jsonData.messagesByUser
          });
        }
      },
      function(jsonData) {
        console.log(jsonData)
      }
    )
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

    const streamInfo = this.state.streamInfo;
    const videoId = this.props.match.params.videoId;

    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <StreamHeader title={streamInfo.title} link={`/watch/${videoId}`} navName="Watch"/>
          <StatsSummary statistics={streamInfo}/>
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