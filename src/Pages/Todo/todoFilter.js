import React, { memo } from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

const TodoFilter = ({ filterType, handleFilterTodo }) => {
  console.log('TodoFilter render');
  return (
    <div className="todo-filter">
      <button
        // style={{
        //   backgroundColor: filterType === 'all' ? 'red' : 'gray',
        //   color: filterType === 'all' ? '#fff' : '#000',
        // }}
        className={cs({
          activeBtn: filterType === 'all',
        })}
        type="button"
        onClick={() => handleFilterTodo('all')}
      >
        All
      </button>
      <button
        className={cs({
          activeBtn: filterType === 'pending',
        })}
        // className={filterType === 'pending' ? 'activeBtn' : ''}
        // style={{
        //   backgroundColor: filterType === 'pending' ? 'red' : 'gray',
        //   color: filterType === 'pending' ? '#fff' : '#000',
        // }}
        type="button"
        onClick={() => handleFilterTodo('pending')}
      >
        Pending
      </button>
      <button
        className={cs({
          activeBtn: filterType === 'completed',
        })}
        // className={filterType === 'completed' ? 'activeBtn' : ''}
        // style={{
        //   backgroundColor: filterType === 'completed' ? 'red' : 'gray',
        //   color: filterType === 'completed' ? '#fff' : '#000',
        // }}
        type="button"
        onClick={() => handleFilterTodo('completed')}
      >
        Completed
      </button>
    </div>
  );
};

TodoFilter.propTypes = {
  filterType: PropTypes.oneOf(['all', 'pending', 'completed']).isRequired,
  handleFilterTodo: PropTypes.func.isRequired,
};

export default memo(TodoFilter);
