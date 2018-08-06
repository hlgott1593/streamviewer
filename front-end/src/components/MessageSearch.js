import React, { Component } from 'react'
import MessageList from './MessageList'
import Utils from "../Utils"
import './ChatBox.css'

class MessageSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  getMessages(query) {
    console.log(query);
    var self = this;
    var url = Utils.getBaseURL() 
      + '/api/messages/search?username=' 
      + query;
    
    Utils.APIGet(url,
      function(jsonData) {
        // handle message data
        console.log(jsonData);
        if (jsonData.status == "SUCCESS") {
          self.setState({
              results: jsonData.messages
          });
        }
      },
      function(jsonData) {
        //handle errors
        console.log(jsonData)
      }
    );
  }

  handleInputChange(event) {
    if(event.target.value) {
      //get search results for text
      this.getMessages(event.target.value);
    }
    // this.setState({
    //   query: event.target.value
    // }, 
    // this.getMessages.bind(this));
  }

  render() {
    const results = this.state.results.map((result) =>
      <div><b>{result.username}</b>: {result.text}</div>
    );

    return (
      <div>
        <form>
          <input type="text" className="form-control"
            placeholder="Find username messages"
            onChange={this.handleInputChange}
          />
          <div className="scrollable">{results}</div>
        </form>
      </div>
    )
  }
}

export default MessageSearch