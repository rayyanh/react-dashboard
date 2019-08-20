import React, { Component } from "react";
import shortid from "shortid";

export default class TodoForm extends React.Component {
  state = {
    text: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false
    });
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <input
            className="form-control col-9"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="Add Task"
          />
          <button
            className="btn col-3 btn-outline-success"
            onClick={this.handleSubmit}
          >
            Add
          </button>
        </div>
      </form>
    );
  }
}
