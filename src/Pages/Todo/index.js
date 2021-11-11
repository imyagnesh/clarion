import React, { Component, createRef } from 'react';

import './todo.css';
import TodoFilter from './todoFilter';
import TodoForm from './todoForm';
import TodoList from './todoList';

export default class Todo extends Component {
  state = {
    todoList: [],
    filterType: 'all',
    error: null,
    loading: false,
  };

  todoTextRef = createRef();

  async componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    try {
      this.setState({
        loading: true,
      });
      const res = await fetch('http://localhost:3000/todoList');
      const json = await res.json();
      this.setState({
        todoList: json,
        loading: false,
      });
    } catch (error) {
      this.setState({
        error,
        loading: false,
      });
    }
  };

  handleAddTodo = async event => {
    try {
      event.preventDefault();

      this.setState({
        loading: true,
      });
      const res = await fetch('http://localhost:3000/todoList', {
        method: 'POST',
        body: JSON.stringify({
          text: this.todoTextRef.current.value,
          isDone: false,
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      const json = await res.json();

      this.setState(
        ({ todoList }) => ({
          filterType: 'all',
          todoList: [...todoList, json],
          loading: false,
        }),
        () => {
          this.todoTextRef.current.value = '';
          // this.handleFilterTodo('all');
        },
      );
    } catch (error) {
      this.setState({
        error,
        loading: false,
      });
    }
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

  filteredTodo = () => {
    const { todoList, filterType } = this.state;
    return todoList.filter(item => {
      switch (filterType) {
        case 'pending':
          return !item.isDone;
        case 'completed':
          return item.isDone;
        default:
          return true;
      }
    });
  };

  render() {
    const { filterType, error, loading } = this.state;

    if (error) {
      return <h1>{error.message}</h1>;
    }

    return (
      <div className="container">
        <h1>Todo App</h1>
        <TodoForm handleAddTodo={this.handleAddTodo} ref={this.todoTextRef} />
        {loading ? (
          <div className="todo-list">
            <h1>Loading...</h1>
          </div>
        ) : (
          <TodoList
            todoList={this.filteredTodo()}
            handleCompleteTodo={this.handleCompleteTodo}
            handleDeleteTodo={this.handleDeleteTodo}
          />
        )}
        <TodoFilter
          filterType={filterType}
          handleFilterTodo={this.handleFilterTodo}
        />
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
