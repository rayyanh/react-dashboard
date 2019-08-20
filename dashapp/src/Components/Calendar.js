import React, { Component } from "react";
import Calendar from "react-calendar";

export default class Calendarr extends Component {
  render() {
    return (
      <div className="col-lg-3 border border-success rounded ">
        <br />
        <Calendar />
        <br />
      </div>
    );
  }
}
