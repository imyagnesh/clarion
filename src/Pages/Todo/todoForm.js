import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';

const TodoForm = forwardRef(({ handleAddTodo, status }, ref) => {
  console.log('TodoForm render');
  return (
    <form onSubmit={handleAddTodo}>
      <input type="text" ref={ref} />
      <button
        type="submit"
        disabled={status.some(
          x => x.process === 'add' && x.status === 'loading',
        )}
      >
        Add Todo
      </button>
    </form>
  );
});

TodoForm.propTypes = {
  handleAddTodo: PropTypes.func.isRequired,
  status: PropTypes.arrayOf(
    PropTypes.shape({
      process: PropTypes.string,
      status: PropTypes.string,
    }),
  ).isRequired,
};

export default memo(TodoForm);
