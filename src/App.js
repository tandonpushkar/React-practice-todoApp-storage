import React from "react";
import Header from "./Components/Header";
import TodoInput from "./Components/TodoInput";
import SimpleStorage from "react-simple-storage";

export default class App extends React.Component {
  state = {
    todos: [
      {
        id: 0,
        todo: "Hello This is React"
      },
      {
        id: 1,
        todo: "Vegetables"
      },
      {
        id: 2,
        todo: "Learn Java"
      },
      {
        id: 3,
        todo: "Strong Aptitude"
      }
    ],
    nextInt: 4
  };

  addTodo = todoText => {
    var todos = this.state.todos.slice();
    todos.push({ id: this.state.nextInt, todo: todoText });
    this.setState({
      todos: todos,
      nextInt: this.state.nextInt + 1
    });
  };

  removeTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    return (
      <div>
        <SimpleStorage parent={this} />
        <Header />
        <TodoInput addTodo={this.addTodo} removeTodo={this.removeTodo} />
        <ul>
          {this.state.todos.map(t => {
            return (
              <li key={t.id}>
                <button onClick={() => this.removeTodo(t.id)}>Remove</button>
                {t.todo}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
