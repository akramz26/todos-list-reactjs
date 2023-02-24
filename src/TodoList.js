import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.create = this.create.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
    // console.log('constructor')
  }

  // componentDidMount(){
  //   console.log('component did mount')
  // }

  // componentDidUpdate(prevProps,prevState){
  //   console.log('component did update')
  //   console.log(prevState.todos)
  //   console.log(this.state.todos)
  // }


  create(newTodo) {
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }
  remove(id) {
    alert("you shur to remov the task")
    this.setState({
      todos: this.state.todos.filter(t => t.id !== id)
    });
  }
  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  render() {
    // console.log('render')
    const todos = this.state.todos.map(todo => {
      return (
          <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            completed={todo.completed}
            removeTodo={this.remove}
            updateTodo={this.update}
            toggleTodo={this.toggleCompletion}
          />
      );
    });
    return (
      <div className='TodoList'>
        <h1>
          TODO LIST
        </h1>
        <NewTodoForm createTodo={this.create} />

        <ul>
          {todos}
        </ul>
      </div>
    );
  }
}
export default TodoList;
