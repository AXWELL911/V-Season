/* eslint-disable no-useless-constructor */
/* jshint ignore:start */
import React, { Component } from "react";
import SeasonDisplay from "./components/SeasonDisplay";
import Spinner from "./components/Spinner";
import API from './API';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { lat: -75, lon: null };
  }
//   componentDidMount() {
//     window.navigator.geolocation.getCurrentPosition(
//       (p) => this.setState({ lat: p.coords.latitude, lon: p.coords.longitude }),
//       (err) => console.log(err)
//     );
//   }

 async componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      console.log("Did Update");

      const response = await API.get(`/weather`, {
        params: {
          lat: this.state.lat,
          lon: this.state.lon,
          appid: "ce78b3244c643132d62453f46595359c",
        },
      });

    }
  }

  render() {
    return (
      <div>
        {this.state.lat === null && <Spinner />}
        {this.state.lat !== null && <SeasonDisplay lat={this.state.lat} />}
      </div>
    );
  }
}

export default App;
