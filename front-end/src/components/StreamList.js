import React from "react";
import StreamItem from "./StreamItem";

class StreamList extends React.Component {
  render() {
    const streams = this.props.streams;
    const listItems = streams.map((streamInfo) =>
      <StreamItem data={streamInfo} />
    );
    return (
      <div className="list-group">
        {listItems}
      </div>
    );
  }
}

export default StreamList;