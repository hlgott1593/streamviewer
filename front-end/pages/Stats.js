import React from "react";
import { render } from "react-dom";
import StatsSummary from "../components/StatsSummary"

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

class StatsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      data: this.makeData()
    };
  }

  componentDidMount() {
    //get video info from videoId
    this.loadVideoStats();
    this.loadMessageStats();
    
  }

  loadVideoStats() {
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