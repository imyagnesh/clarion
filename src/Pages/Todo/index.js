import React, {
  Component,
  createRef,
  useState,
  useRef,
  useEffect,
  useCallback,
} from 'react';
import PropTypes from 'prop-types';
import statusHoc from '../../HOC/statusHOC';
import './todo.css';
import TodoFilter from './todoFilter';
import TodoForm from './todoForm';
import TodoList from './todoList';

// Every Hook will start with "use" Keyword

const Todo = ({ tl = [] }) => {
  const [todoList, setTodoList] = useState(tl);
  const [filterType, setFilterType] = useState('all');
  const [status, setStatus] = useState([]);

  const todoTextRef = useRef();

  const loadData = useCallback(async ft => {
    // const processName = 'load';
    // const { loadingStatus, successStatus, errorStatus } = this.props;
    try {
      // loadingStatus(processName);

      let query = '';
      if (ft !== 'all') {
        query = `?isDone=${ft === 'completed'}`;
      }

      const res = await fetch(`http://localhost:3000/todoList${query}`);
      const json = await res.json();

      setTodoList(json);
      setFilterType(ft);
    } catch (error) {
      // errorStatus(processName, error);
    }
  }, []);

  // ComponentDidMout
  useEffect(() => {
    loadData('all');
  }, [loadData]);

  const handleAddTodo = async event => {
    // const processName = 'add';
    // const { loadingStatus, successStatus, errorStatus } = this.props;
    try {
      event.preventDefault();
      // loadingStatus(processName);
      const res = await fetch('http://localhost:3000/todoList', {
        method: 'POST',
        body: JSON.stringify({
          text: todoTextRef.current.value,
          isDone: false,
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      const json = await res.json();

      setTodoList(val => {
        todoTextRef.current.value = '';
        return [...val, json];
      });

      // this.setState(
      //   ({ todoList }) => ({
      //     todoList: [...todoList, json],
      //   }),
      //   () => {
      //     this.todoTextRef.current.value = '';
      //     this.loadData('all');
      //   },
      // );
      // successStatus(processName);
    } catch (error) {
      // errorStatus(processName, error);
    }
  };

  const handleCompleteTodo = async item => {
    // const processName = 'update';
    // const { loadingStatus, successStatus, errorStatus } = this.props;
    try {
      // loadingStatus(processName, item.id);
      const res = await fetch(`http://localhost:3000/todoList/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify({ ...item, isDone: !item.isDone }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      const json = await res.json();

      setTodoList(val => {
        const index = val.findIndex(x => x.id === json.id);

        return [...val.slice(0, index),
                json,
                ...val.slice(index + 1)];
      });
      // this.setState(({ todoList }) => {
      //   const index = todoList.findIndex(x => x.id === json.id);

      //   return {
      //     todoList: [
      //       ...todoList.slice(0, index),
      //       json,
      //       ...todoList.slice(index + 1),
      //     ],
      //   };
      // });
      // successStatus(processName, item.id);
    } catch (error) {
      // errorStatus(processName, error, item.id);
    }
  };

  const handleDeleteTodo = async id => {
    // const processName = 'delete';
    // const { loadingStatus, successStatus, errorStatus } = this.props;
    try {
      // loadingStatus(processName, id);
      await fetch(`http://localhost:3000/todoList/${id}`, {
        method: 'DELETE',
      });

      setTodoList(val => {
        const index = val.findIndex(x => x.id === id);

        return [...val.slice(0, index), ...val.slice(index + 1)];
      });

      // this.setState(({ todoList }) => {
      //   const index = todoList.findIndex(x => x.id === id);

      //   return {
      //     todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
      //   };
      // });
      // successStatus(processName, id);
    } catch (error) {
      // errorStatus(processName, error, id);
    }
  };

  return (
    <div className="container">
      <h1>Todo App</h1>
      <TodoForm
        handleAddTodo={handleAddTodo}
        status={status}
        ref={todoTextRef}
      />
      <TodoList
        todoList={todoList}
        status={status}
        handleCompleteTodo={handleCompleteTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
      {/* <TodoFilter filterType={filterType} handleFilterTodo={this.loadData} /> */}
    </div>
  );
};

export default Todo;

// class Todo extends Component {
//   state = {
//     todoList: [],
//     filterType: 'all',
//   };

//   todoTextRef = createRef();

//   async componentDidMount() {
//     this.loadData('all');
//   }

//   loadData = async filterType => {
//     const processName = 'load';
//     const { loadingStatus, successStatus, errorStatus } = this.props;
//     try {
//       loadingStatus(processName);

//       let query = '';

//       if (filterType !== 'all') {
//         query = `?isDone=${filterType === 'completed'}`;
//       }

//       const res = await fetch(`http://localhost:3000/todoList${query}`);
//       const json = await res.json();
//       this.setState({
//         filterType,
//         todoList: json,
//       });
//       successStatus(processName);
//     } catch (error) {
//       errorStatus(processName, error);
//     }
//   };

//   handleAddTodo = async event => {
//     const processName = 'add';
//     const { loadingStatus, successStatus, errorStatus } = this.props;
//     try {
//       event.preventDefault();
//       loadingStatus(processName);
//       const res = await fetch('http://localhost:3000/todoList', {
//         method: 'POST',
//         body: JSON.stringify({
//           text: this.todoTextRef.current.value,
//           isDone: false,
//         }),
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//         },
//       });

//       const json = await res.json();

//       this.setState(
//         ({ todoList }) => ({
//           todoList: [...todoList, json],
//         }),
//         () => {
//           this.todoTextRef.current.value = '';
//           this.loadData('all');
//         },
//       );
//       successStatus(processName);
//     } catch (error) {
//       errorStatus(processName, error);
//     }
//   };

//   handleCompleteTodo = async item => {
//     const processName = 'update';
//     const { loadingStatus, successStatus, errorStatus } = this.props;
//     try {
//       loadingStatus(processName, item.id);
//       const res = await fetch(`http://localhost:3000/todoList/${item.id}`, {
//         method: 'PUT',
//         body: JSON.stringify({ ...item, isDone: !item.isDone }),
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//         },
//       });

//       const json = await res.json();

//       this.setState(({ todoList }) => {
//         const index = todoList.findIndex(x => x.id === json.id);

//         return {
//           todoList: [
//             ...todoList.slice(0, index),
//             json,
//             ...todoList.slice(index + 1),
//           ],
//         };
//       });
//       successStatus(processName, item.id);
//     } catch (error) {
//       errorStatus(processName, error, item.id);
//     }
//   };

//   handleDeleteTodo = async id => {
//     const processName = 'delete';
//     const { loadingStatus, successStatus, errorStatus } = this.props;
//     try {
//       loadingStatus(processName, id);
//       await fetch(`http://localhost:3000/todoList/${id}`, {
//         method: 'DELETE',
//       });

//       this.setState(({ todoList }) => {
//         const index = todoList.findIndex(x => x.id === id);

//         return {
//           todoList: [...todoList.slice(0, index), ...todoList.slice(index + 1)],
//         };
//       });
//       successStatus(processName, id);
//     } catch (error) {
//       errorStatus(processName, error, id);
//     }
//   };

//   render() {
//     const { filterType, todoList } = this.state;

//     const { status } = this.props;

//     if (status.some(x => x.process === 'load' && x.status === 'loading')) {
//       return <h1>Loading...</h1>;
//     }

//     if (status.some(x => x.process === 'load' && x.status === 'error')) {
//       return <h1>Something Went wrong</h1>;
//     }

//     return (
//       <div className="container">
//         <h1>Todo App</h1>
//         <TodoForm
//           handleAddTodo={this.handleAddTodo}
//           status={status}
//           ref={this.todoTextRef}
//         />
//         <TodoList
//           todoList={todoList}
//           status={status}
//           handleCompleteTodo={this.handleCompleteTodo}
//           handleDeleteTodo={this.handleDeleteTodo}
//         />
//         <TodoFilter filterType={filterType} handleFilterTodo={this.loadData} />
//       </div>
//     );
//   }
// }

// Todo.propTypes = {
//   status: PropTypes.arrayOf(
//     PropTypes.shape({
//       process: PropTypes.string,
//       status: PropTypes.string,
//       id: PropTypes.number,
//     }),
//   ).isRequired,
//   loadingStatus: PropTypes.func.isRequired,
//   successStatus: PropTypes.func.isRequired,
//   errorStatus: PropTypes.func.isRequired,
// };

// export default statusHoc(Todo);

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
