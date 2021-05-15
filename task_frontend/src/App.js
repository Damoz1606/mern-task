import logo from "./logo.svg";

import "./App.css";
import { Component } from "react";

import Navigation from "./components/navigation/Navigation";
import TodoForm from "./components/todo-form/TodoForm";

import { todo } from "./todo.json";

class App extends Component {
  constructor() {
    super();
    this.navItem = {
      title: "React",
      ntask: todo.length,
    };
    this.state = { todo };
    this.handleAddToDo = this.handleAddToDo.bind(this);
  }

  handleAddToDo(item) {
    this.setState({
      todo: [...this.state.todo, item],
    });
  }

  removeToDo(index) {
    if (window.confirm("Are you sure you want to delete")) {
      this.setState({
        todo: this.state.todo.filter((item, i) => i !== index),
      });
    }
  }

  render() {
    const todoList = this.state.todo.map((item, i) => {
      return (
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-header">
              <h5>{item.title}</h5>
              <span className="badge rounded-badge bg-danger text-light">
                {item.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{item.description}</p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeToDo.bind(this, i)}
              >
                <span className="fa fa-trash"></span>
              </button>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="App">
        <Navigation brand={this.navItem.title} count={this.navItem.ntask} />
        <div className="container mx-auto">
          <div className="row">
            <div className="col-auto container">
              <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onToDo={this.handleAddToDo} />
            </div>
            <div className="container col-auto mt-4">
              <div className="row">{todoList}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
