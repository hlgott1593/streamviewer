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

  getMessages() {
    // axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
    //   .then(({ data }) => {
    //     this.setState({
    //       results: data.data
    //     })
    //   })
  }

  handleInputChange() {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getMessages()
        }
      } else if (!this.state.query) {
      }
    })
  }

  render() {
    return (
      <form>
        <input type="text" className="form-control"
          placeholder="Search username..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    )
  }
}

export default MessageSearch