import React from "react";
import "./MessageForm.css";
import Utils from "../Utils"

class MessageForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
    // bind functions
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    //on mount load api data
    console.log(this.state.input);
    this.props.submitForm(this.state.input);
  }

  handleChange(event) {
    this.setState({input: event.target.value});
  }

  render() {
    return(
      <div>
      	<form value={this.state.value} onSubmit={this.handleSubmit}>
		  <input onChange={this.handleChange}
      type="text" className="MessageForm-input form-control" placeholder="Enter message..." />
		  <button type="submit" className="btn btn-primary">Send</button>
		 
	
		</form>
      </div>
    );
  }
}

export default MessageForm;