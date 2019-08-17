import React from "react";

export default class TodoInput extends React.Component {
  state = {
    todo: ""
  };

  handleChange = e => {
    this.setState({ todo: e.target.value });
  };

  addTask = todo => {
    this.props.addTodo(todo);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter Task"
          onChange={this.handleChange}
        />
        <button onClick={() => this.addTask(this.state.todo)}>Submit</button>
        <div />
      </div>
    );
  }
}
