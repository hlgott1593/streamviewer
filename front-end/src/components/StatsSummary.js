import React from "react";
import StatsSummaryItem from "./StatsSummaryItem";

class StatsSummary extends React.Component {

  render() {
  	const stats = this.props.statistics
    return(
    	<div className="row">
			<div className="col-sm-6">
	    		<StatsSummaryItem stat="View Count" value={stats.viewCount}/>
	    		<StatsSummaryItem stat="Like Count" value={stats.likeCount}/>
	    	</div>
			<div className="col-sm-6">
				<StatsSummaryItem stat="Comment Count" value={stats.commentCount}/>
				<StatsSummaryItem stat="Dislike Count" value={stats.dislikeCount}/>
			</div>
    	</div>
    );
  }
}

export default StatsSummary;