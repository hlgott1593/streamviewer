import React from "react";
import StatsSummary from "../components/StatsSummary"
// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import Utils from "../Utils"

class StatsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      videoData: this.makeData()
    };
  }

  componentDidMount() {
    //get video info from videoId
    this.loadVideoStats();
    this.loadMessageStats();
    
  }

  loadVideoStats() {
    const url = 'api/stream/' + this.props.match.params.videoId
    console.log("HERE" + url); 
    Utils.APIGet(url,
      function(jsonData) {
        // handle video data
      },
      function(jsonData) {
        console.log(jsonData)
      }
    )
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

  loadMessageStats() {
    const url = this.props.location + 'api/messages/' + this.state.videoData.liveChatId
    Utils.APIGet(url,
      function(jsonData) {
        // handle message data
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
    const { data } = this.state;
    const columns = [
      {
        Header: "Username",
        accessor: "username"
      },
      {
        Header: "Message Count",
        accessor: "messageCount"
      }
    ];
    const defaultSorting = [
      {
        id: "messageCount",
        desc: true
      }
    ];

    return (
      <div>
        <StatsSummary />

        <ReactTable
          data={data}
          columns={columns}
          defaultSorted={defaultSorting}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default StatsPage;