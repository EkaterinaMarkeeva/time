import React from "react";
import { VideoType } from "../video/Video";

export const withData = () => (Component: any) => {
  return class extends React.Component {
    constructor(props: VideoType) {
      super(props);
      this.state = { date: '' };
    }

    componentDidMount() {
      this.getDate();
    }

    getDate() {
      const date = new Date(this.props.date);
      const now = new Date();
      const interval: number = now.getTime() - date.getTime();

      if (interval < 3600000) {
        const min: string = String(Math.floor(interval / 60000));

        if (min.endsWith('1')) {
          this.setState({ date: `${min} минуту назад` });
          return;
        }

        if (min.endsWith('2') || min.endsWith('3') || min.endsWith('3')) {
          this.setState({ date: `${min} минуты назад` });
          return;
        }

        this.setState({ date: `${min} минут назад` });
        return;
      }

      if (interval < 86400000) {
        const hours: string = String(Math.floor(interval / 3600000));

        if (hours.endsWith('1')) {
          this.setState({ date: `${hours} час назад` });
          return;
        }

        if (hours.endsWith('2') || hours.endsWith('3') || hours.endsWith('3')) {
          this.setState({ date: `${hours} часа назад` });
          return;
        }

        this.setState({ date: `${hours} часов назад` });
        return;
      }
      
      const day: string = String(Math.floor(interval / 86400000));

      if (day.endsWith('1')) {
        this.setState({ date: `${day} день назад` });
        return;
      }

      if (day.endsWith('2') || day.endsWith('3') || day.endsWith('3')) {
        this.setState({ date: `${day} дня назад` });
        return;
      }

      this.setState({ date: `${day} дней назад` });    
    }
    
    render() {
      return <Component {...this.state} />
    }
  }
}
