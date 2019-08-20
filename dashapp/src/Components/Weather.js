import ReactWeather from "react-open-weather";
import React, { Component } from "react";

export default class Weather extends Component {
  render() {
    return (
      <div className="col-lg-3 border border-warning rounded ">
        <br />
        <ReactWeather
          forecast="today"
          apikey="KEY"
          type="city"
          city="Seattle"
        />
        <br />
      </div>
    );
  }
}
