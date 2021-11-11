import React, { Component, createRef } from 'react';

import './todo.css';
import TodoFilter from './todoFilter';
import TodoForm from './todoForm';
import TodoList from './todoList';

export default class Todo extends Component {
  state = {
    todoList: [],
    filterType: 'all',
    status: [],
  };

  todoTextRef = createRef();

  async componentDidMount() {
    this.loadData('all');
  }

  loadingStatus = (processName, id = -1) => {
    this.setState(({ status }) => {
      const index = status.findIndex(
        x => x.process === processName && x.id === id,
      );
      const data = {
        process: processName,
        status: 'loading',
        id,
      };
      if (index === -1) {
        return {
          status: [...status, data],
        };
      }
      return {
        status: [...status.slice(0, index), data, ...status.slice(index + 1)],
      };
    });
  };

  successStatus = (processName, id = -1) => {
    this.setState(({ status }) => ({
      status: status.filter(
        x =>
          !(x.process === processName && x.status === 'loading' && x.id === id),
      ),
    }));
  };

  errorStatus = (processName, error, id = -1) => {
    this.setState(({ status }) => {
      const index = status.findIndex(
        x => x.process === processName && x.status === 'loading' && x.id === id,
      );
      return {
        status: [
          ...status.slice(0, index),
          {
            ...status[index],
            status: 'error',
            error,
          },
          ...status.slice(index + 1),
        ],
      };
    });
  };

  loadData = async filterType => {
    const processName = 'load';
    try {
      this.loadingStatus(processName);

      let query = '';

      if (filterType !== 'all') {
        query = `?isDone=${filterType === 'completed'}`;
      }

      const res = await fetch(`http://localhost:3000/todoList${query}`);
      const json = await res.json();
      this.setState({
        filterType,
        todoList: json,
      });
      this.successStatus(processName);
    } catch (error) {
      this.errorStatus(processName, error);
    }
  };

  handleAddTodo = async event => {
    const processName = 'add';
    try {
      event.preventDefault();
      this.loadingStatus(processName);
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
          todoList: [...todoList, json],
        }),
        () => {
          this.todoTextRef.current.value = '';
          this.loadData('all');
        },
      );
      this.successStatus(processName);
    } catch (error) {
      this.errorStatus(processName, error);
    }
  };

  handleCompleteTodo = async item => {
    const processName = 'update';
    try {
      this.loadingStatus(processName, item.id);
      const res = await fetch(`http://localhost:3000/todoList/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify({ ...item, isDone: !item.isDone }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      const json = await res.json();

      this.setState(({ todoList }) => {
        const index = todoList.findIndex(x => x.id === json.id);

        return {
          todoList: [
            ...todoList.slice(0, index),
            json,
            ...todoList.slice(index + 1),
          ],
        };
      });
      this.successStatus(processName, item.id);
    } catch (error) {
      this.errorStatus(processName, error, item.id);
    }
  };

  handleDeleteTodo = async id => {
    const processName = 'delete';
    try {
      this.loadingStatus(processName, id);
      await fetch(`http://localhost:3000/todoList/${id}`, {
        method: 'DELETE',
      });

      this.setState(({ todoList }) => {
        const index = todoList.findIndex(x => x.id === id);

        return {
          todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
        };
      });
      this.successStatus(processName, id);
    } catch (error) {
      this.errorStatus(processName, error, id);
    }
  };

  render() {
    const { filterType, status, todoList } = this.state;

    if (status.some(x => x.process === 'load' && x.status === 'loading')) {
      return <h1>Loading...</h1>;
    }

    if (status.some(x => x.process === 'load' && x.status === 'error')) {
      return <h1>Something Went wrong</h1>;
    }

    return (
      <div className="container">
        <h1>Todo App</h1>
        <TodoForm
          handleAddTodo={this.handleAddTodo}
          status={status}
          ref={this.todoTextRef}
        />
        <TodoList
          todoList={todoList}
          status={status}
          handleCompleteTodo={this.handleCompleteTodo}
          handleDeleteTodo={this.handleDeleteTodo}
        />
        <TodoFilter filterType={filterType} handleFilterTodo={this.loadData} />
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
