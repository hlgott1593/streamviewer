import React, { Component } from 'react'
import MessageList from './MessageList'

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
      + '/api/messages?username=' 
      + query;
    
    Utils.APIGet(url,
      function(jsonData) {
        // handle message data
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
    return (
      <div>
        <form>
          <input type="text" className="form-control"
            placeholder="Find username messages"
            onChange={this.handleInputChange}
          />
        </form>
      </div>
    )
  }
}

export default MessageSearch