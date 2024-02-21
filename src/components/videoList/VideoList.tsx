import React from "react";
import { Video, VideoType } from "../video/Video";

type VideoListType = { list : VideoType[] };

export class VideoList extends React.Component<VideoListType> {
  render() {
    const {list} = this.props;
    return list.map((item, index) => <Video url={item.url} date={item.date} key={index} />);
  }
}
