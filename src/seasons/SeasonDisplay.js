import React from "react";
import Spinner from "../Spinner";
import SeasonDisplayDetail from "./SeasonDisplayDetail";

export class SeasonDisplay extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          lat: position.coords.latitude,
        }),
      (err) =>
        this.setState({
          errorMessage: err.message,
        })
    );
  }

  renderBody = () => {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error message: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplayDetail lat={this.state.lat} />;
    }
    return <Spinner message="Please accept location request" />;
  };

  render() {
    return this.renderBody();
  }
}
