import React, { Component } from "react";
import TodoList from "./todolist";

export default class TodoCol extends Component {
  render() {
    return (
      <div className="col-lg border border-primary rounded">
        <h3 className="funTitle">Todo List</h3>
        <div className="container">
          <div className="container">
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}
