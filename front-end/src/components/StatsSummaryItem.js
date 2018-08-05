import React from "react";

class StatsSummaryItem extends React.Component {

  render() {
    return(	
	  <div className="panel panel-default">
	    <div className="panel-body">
	      <label>{this.props.stat}</label>
	      : {this.props.value}
	    </div>
	  </div>    		
    );
  }
}

export default StatsSummaryItem;