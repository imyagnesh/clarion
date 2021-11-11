import React, { memo } from 'react';
import PropTypes from 'prop-types';

const TodoList = ({
  todoList,
  handleCompleteTodo,
  handleDeleteTodo,
  status,
}) => {
  console.log('TodoList render');
  return (
    <div className="todo-list">
      {todoList.map(item => (
        <div key={item.id} className="todo-item">
          <input
            type="checkbox"
            disabled={status.some(
              x =>
                x.process === 'update' &&
                x.status === 'loading' &&
                x.id === item.id,
            )}
            checked={item.isDone}
            onChange={() => handleCompleteTodo(item)}
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
            disabled={status.some(
              x =>
                x.process === 'delete' &&
                x.status === 'loading' &&
                x.id === item.id,
            )}
            onClick={() => handleDeleteTodo(item.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

TodoList.propTypes = {
  handleDeleteTodo: PropTypes.func.isRequired,
  handleCompleteTodo: PropTypes.func.isRequired,
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      isDone: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  status: PropTypes.arrayOf(
    PropTypes.shape({
      process: PropTypes.string,
      status: PropTypes.string,
      id: PropTypes.number,
    }),
  ).isRequired,
};

export default memo(TodoList);
