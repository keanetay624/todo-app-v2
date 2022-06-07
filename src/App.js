import React, { Component } from "react";
import Navbar from "./components/navbar";
import Clock from "./components/clock";
import Todos from "./components/todos";
import NewTodo from "./components/newTodoInput";

import "./CSS_Files/app.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      input: "",
    };
  }

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      this.setState({ todos });
    }
    document.body.style.backgroundColor = "#a5c7f8";
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleAdd = (todoId) => {
    let { todos, input } = this.state;
    const newTodo = {
      id: todoId,
      task: input,
      isComplete: false,
    };
    todos = [...todos, newTodo];
    this.setState({
      todos,
    });
    localStorage.setItem("todos", JSON.stringify(todos));
    document.getElementById("userInput").value = "";
    document.getElementById("userInput").focus();
  };

  handleToggleChecked = (todoId) => {
    const { todos } = this.state;

    todos[todoId].isComplete = !todos[todoId].isComplete;
    this.setState({
      todos,
    });
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  handleClearAll = () => {
    const todos = [];
    this.setState({
      todos,
    });
    localStorage.setItem("todos", JSON.stringify(todos));

    document.removeEventListener("onClick", this.handleClearAll);
  };

  handleClearCompleted = () => {
    const todos = this.state.todos.filter((todo) => todo.isComplete === false);
    this.setState({
      todos,
    });
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  render() {
    const outstandingTodos = this.state.todos.filter(
      (todo) => todo.isComplete === false
    ).length;
    const CURRENT_DATE_TIME = new Date();
    return (
      <div className="App">
        <Navbar
          numTasks={outstandingTodos}
          addTodoHandler={() => this.handleAdd(this.state.todos.length)}
          clearCompletedTodosHandler={this.handleClearCompleted}
          clearAllTodosHandler={this.handleClearAll}
          newTodoId={this.state.todos.length}
        />

        <Clock />
        <NewTodo userInputChangeHandler={this.handleChange} />
        <div className="d-flex m-2 p-2 justify-content-center">
          {/* <BtnAddTodo
            addTodoHandler={() => this.handleAdd(this.state.todos.length)}
          />
          <BtnClearCompletedTodos
            clearCompletedTodosHandler={this.handleClearCompleted}
          />
          <BtnClearAllTodos clearAllTodosHandler={this.handleClearAll} /> */}
        </div>

        <br />
        <Todos todos={this.state.todos} onChecked={this.handleToggleChecked} />
      </div>
    );
  }
}

export default App;
