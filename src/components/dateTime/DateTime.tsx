import React from "react";

export type DateTimeType = { date: string };

export class DateTime extends React.Component<DateTimeType> {
  render() {
    return (
      <p className="date">{this.props.date}</p>
    )
  }
}
