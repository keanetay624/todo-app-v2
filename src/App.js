import React, { Component } from "react";
import Navbar from "./components/navbar";
import Clock from "./components/clock";
import Todos from "./components/todos";
import NewTodo from "./components/newTodoInput";
import Quote from "./components/quote";
import axios from "axios";

import "./CSS_Files/app.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      input: "",
      quote: {
        id: "",
        content: "",
        author: "",
      },
    };
  }

  async componentDidMount() {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      this.setState({ todos });
    }
    document.body.style.backgroundColor = "#a5c7f8";

    const response = await axios.get(`https://quotes.rest/qod`);
    const data = response.data.contents.quotes[0];
    const newQuote = {
      id: data.id,
      content: data.quote,
      author: data.author,
    };
    this.setState({
      quote: newQuote,
    });
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
    return (
      <div className="App">
        <Navbar
          numTasks={outstandingTodos}
          clearCompletedTodosHandler={this.handleClearCompleted}
          clearAllTodosHandler={this.handleClearAll}
          newTodoId={this.state.todos.length}
        />
        <Quote quote={this.state.quote} />
        <Clock />
        <Todos todos={this.state.todos} onChecked={this.handleToggleChecked} />
        <NewTodo
          userInputChangeHandler={this.handleChange}
          addTodoHandler={() => this.handleAdd(this.state.todos.length)}
        />
      </div>
    );
  }
}

export default App;
