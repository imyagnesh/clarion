import React, { Component, createRef } from 'react';
import './todo.css';

export default class Todo extends Component {
  state = {
    todoList: [],
  };

  todoTextRef = createRef();

  handleAddTodo = (event) => {
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

  handleCompleteTodo = (event) => {
    this.setState(({ todoList }) => ({
      todoList: todoList.map((item) => {
        if (item.id === Number(event.target.name)) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      }),
    }));
  };

  render() {
    console.log('render');
    const { todoList } = this.state;
    return (
      <div className="container">
        <h1>Todo App</h1>
        <form onSubmit={this.handleAddTodo}>
          <input type="text" ref={this.todoTextRef} />
          <button type="submit">Add Todo</button>
        </form>

        <div className="todo-list">
          {todoList.map((item) => (
            <div key={item.id} className="todo-item">
              <input
                type="checkbox"
                checked={item.isDone}
                name={`${item.id}`}
                onChange={this.handleCompleteTodo}
              />
              <span
                style={{
                  textDecoration: item.isDone ? 'line-through' : 'none',
                }}
              >
                {item.text}
              </span>
              <button type="button">Delete</button>
            </div>
          ))}
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
