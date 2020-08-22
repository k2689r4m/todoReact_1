import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const TodoForm = ({
  todoText,
  onAddItem,
  onTextChange,
}) => {
  const inputRef = useRef();

  const handleAdd = () => {
    onAddItem();
    inputRef.current.focus();
  };

  return (
    <div className="todo-form">
      <input
        ref={inputRef}
        type="text"
        className="todo-input"
        value={todoText}
        onChange={onTextChange}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleAdd();
          }
        }}
      />
      <button
        type="button"
        className="add-btn"
        onClick={handleAdd}
      >
        등록
      </button>
    </div>
  );
};

TodoForm.propTypes = {
  todoText: PropTypes.string.isRequired,
  onAddItem: PropTypes.func.isRequired,
  onTextChange: PropTypes.func.isRequired,
};

export default TodoForm;
