import React, { useState } from 'react';
import { v1 as uuidv1 } from 'uuid';
import './styles.scss';

// Components
import TodoForm from '../TodoForm';
import TodoList from '../TodoList';

const TodoContainer = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState([]);

  const addTodoItem = (text) => {
    setTodoList(
      todoList.concat({
        id: uuidv1(),
        text,
      }),
    );
  };

  const removeTodoItem = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const editTodoItem = (id, textToEdit) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          todo.text = textToEdit;
          return todo;
        } else {
          return todo;
        }
      }),
    );
  };

  const handleAddTodo = () => {
    if (todoText.trim() === '') return;
    addTodoItem(todoText);
    setTodoText('');
  };

  const handleRemoveTodo = (id) => {
    removeTodoItem(id);
  };

  return (
    <div className="todo-container">
      <div className="todo-box">
        <TodoForm
          todoText={todoText}
          onTextChange={(e) => setTodoText(e.target.value)}
          onAddItem={handleAddTodo}
        />
        <TodoList
          todoList={todoList}
          onRemoveTodo={handleRemoveTodo}
          onEditTodo={editTodoItem}
        />
      </div>
    </div>
  );
};

export default TodoContainer;
