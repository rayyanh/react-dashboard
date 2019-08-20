import React, { Component } from "react";

export default class Welcome extends Component {
  render() {
    var today = new Date();
    var date =
      today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return (
      <div className="col-lg border border-primary rounded">
        <br />
        <h3>Welcome Rayyan</h3>
        <p>Today's date is: {date}</p>
        <p>It is currently {time}</p>
        <p>Have a wonderful day!</p>
      </div>
    );
  }
}
