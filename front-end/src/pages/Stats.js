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
    //get stream info from videoId
    this.loadStreamStats();    
  }

  loadStreamStats() {
    var self = this;
    const url = Utils.getBaseURL() 
    + '/api/streams/' 
    + this.props.match.params.videoId
    + '?token='
    + this.props.token;
    // get stream info from backend
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
        // On complettion of getting liveChatId and setting state
        // load aggregate data from backend with liveChatId
        self.loadMessageCountByUser.bind(self));
      },
      function(jsonData) {
        console.log(jsonData)
      }
    );
  }

  loadMessageCountByUser() {
    var self = this;
    const url = Utils.getBaseURL() 
      + '/api/messages/groupbyuser?token='
      + this.props.token
      + '&liveChatId='
      + this.state.streamInfo.liveChatId;
    // get aggregate count of messages by username
    Utils.APIGet(url,
      function(jsonData) {
        // handle grouped messages
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
    const streamInfo = this.state.streamInfo;
    const videoId = this.props.match.params.videoId;
    const messagesByUser = this.state.messagesByUser;
    // react-table columns
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