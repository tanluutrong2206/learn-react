import React from "react";

export class SeasonDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          ...this.state,
          lat: position.coords.latitude,
        });
      },
      (err) => console.log(err)
    );
  }
  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}
