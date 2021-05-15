import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      responsible: "",
      description: "",
      priority: "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onToDo(this.state);
    this.setState({
      title: "",
      responsible: "",
      description: "",
      priority: "",
    });
  }

  render() {
    return (
      <div className="card">
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              onChange={this.handleInput}
              name="title"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              onChange={this.handleInput}
              name="responsible"
              placeholder="Responsible"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              onChange={this.handleInput}
              name="description"
              placeholder="Description"
            />
          </div>
          <div className="form-group">
            <select
              className="form-control"
              name="priority"
              onChange={this.handleInput}
            >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary btn-block">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
