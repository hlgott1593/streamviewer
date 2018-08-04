import React from "react";
import StreamItem from "./StreamItem";

class StreamList extends React.Component {
  render() {
    const streams = this.props.streams;
    const listItems = streams.map((streamInfo) =>
      <StreamItem data={streamInfo} />
    );
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}

export default StreamList;