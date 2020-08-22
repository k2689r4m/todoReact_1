import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({
  id,
  text,
  onRemoveTodo,
  onEditTodo,
}) => {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(text);
  const handleEdit = () => {
    setEditing(false);
    onEditTodo(id, editText);
  };

  return (
    <div className="todo-list-item">
      {editing === true ? (
        <>
          <input
            value={editText}
            className="todo-edit-input"
            autoFocus
            onChange={(e) => setEditText(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleEdit();
              }
            }}
          />
          <button
            type="button"
            className="btn edit-btn"
            onClick={handleEdit}
          >
            수정
          </button>
        </>
      ) : (
        <>
          <div
            className="todo-text"
            onClick={() => setEditing(true)}
          >
            {text}
          </div>
          <button
            type="button"
            className="btn delete-btn"
            onClick={() => onRemoveTodo(id)}
          >
            삭제
          </button>
        </>
      )}
    </div>
  );
};

TodoListItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onEditTodo: PropTypes.func.isRequired,
};

export default TodoListItem;
