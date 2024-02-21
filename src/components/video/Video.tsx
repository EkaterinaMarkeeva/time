import React from "react";
import { DateTimePretty } from "../dateTimePretty/DateTimePretty";

export type VideoType = {
  url: string,
  date: string
}

export class Video extends React.Component<VideoType> {
  render() {
    return (
      <div className="video">
        <iframe src={this.props.url} frameBorder={0} allow="autoplay; encrypted-media" allowFullScreen></iframe>
        <DateTimePretty {...this.props} />
      </div>
    )
  }
}
