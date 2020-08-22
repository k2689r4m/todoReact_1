import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

const TodoList = ({
  onRemoveTodo,
  todoList,
  onEditTodo,
}) => {
  return (
    <div className="todo-list">
      {todoList.map(({ id, text }) => (
        <TodoListItem
          key={id}
          id={id}
          text={text}
          onRemoveTodo={onRemoveTodo}
          onEditTodo={onEditTodo}
        />
      ))}
    </div>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array.isRequired,
  onRemoveTodo: PropTypes.func.isRequired,
  onEditTodo: PropTypes.func.isRequired,
};

export default TodoList;
