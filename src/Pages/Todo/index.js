import React, { Component, createRef } from 'react';
import './todo.css';

export default class Todo extends Component {
  state = {
    todoList: [],
    filterType: 'all',
  };

  todoTextRef = createRef();

  handleAddTodo = event => {
    event.preventDefault();

    this.setState(
      ({ todoList }) => ({
        todoList: [
          ...todoList,
          {
            id: new Date().valueOf(),
            text: this.todoTextRef.current.value,
            isDone: false,
          },
        ],
      }),
      () => {
        this.todoTextRef.current.value = '';
      },
    );
  };

  handleCompleteTodo = id => {
    this.setState(({ todoList }) => ({
      todoList: todoList.map(item => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      }),
    }));
  };

  handleDeleteTodo = id => {
    this.setState(({ todoList }) => ({
      todoList: todoList.filter(item => item.id !== id),
    }));
  };

  handleFilterTodo = filterType => {
    this.setState({
      filterType,
    });
  };

  render() {
    const { todoList, filterType } = this.state;
    return (
      <div className="container">
        <h1>Todo App</h1>
        <form onSubmit={this.handleAddTodo}>
          <input type="text" ref={this.todoTextRef} />
          <button type="submit">Add Todo</button>
        </form>

        <div className="todo-list">
          {todoList
            .filter(item => {
              switch (filterType) {
                case 'pending':
                  return !item.isDone;
                case 'completed':
                  return item.isDone;
                default:
                  return true;
              }
            })
            .map(item => (
              <div key={item.id} className="todo-item">
                <input
                  type="checkbox"
                  checked={item.isDone}
                  onChange={() => this.handleCompleteTodo(item.id)}
                />
                <span
                  style={{
                    textDecoration: item.isDone ? 'line-through' : 'none',
                  }}
                >
                  {item.text}
                </span>
                <button
                  type="button"
                  onClick={() => this.handleDeleteTodo(item.id)}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>

        <div className="todo-filter">
          <button type="button" onClick={() => this.handleFilterTodo('all')}>
            All
          </button>
          <button
            type="button"
            onClick={() => this.handleFilterTodo('pending')}
          >
            Pending
          </button>
          <button
            type="button"
            onClick={() => this.handleFilterTodo('completed')}
          >
            Completed
          </button>
        </div>
      </div>
    );
  }
}

/* <table width="100%">
          <thead>
            <tr>
              <th>Is Done</th>
              <th>Task</th>
              <th>Process</th>
            </tr>
          </thead>
          <tbody>
            {todoList.map((item) => (
              <tr key={item.id}>
                <td>
                  <input type="checkbox" name="isDone" id="isDone" />
                </td>
                <td>
                  <span>{item.text}</span>
                </td>
                <td>
                  <button type="button">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */
