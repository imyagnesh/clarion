import React, { memo } from 'react';
import PropTypes from 'prop-types';

const TodoList = ({ todoList, handleCompleteTodo, handleDeleteTodo }) => {
  console.log('TodoList render');
  return (
    <div className="todo-list">
      {todoList.map(item => (
        <div key={item.id} className="todo-item">
          <input
            type="checkbox"
            checked={item.isDone}
            onChange={() => handleCompleteTodo(item.id)}
          />
          <span
            style={{
              textDecoration: item.isDone ? 'line-through' : 'none',
            }}
          >
            {item.text}
          </span>
          <button type="button" onClick={() => handleDeleteTodo(item.id)}>
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
};

export default memo(TodoList);
