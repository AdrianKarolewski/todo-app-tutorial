import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn Turkish 🧿', isCompleted: false },
    { id: 2, text: 'Be awesome 😎', isCompleted: true },
    { id: 3, text: 'Build a project 🚀', isCompleted: false },
  ]);

  const [newTodo, setNewTodo] = useState('');

  function handleAddTodo() {
    if (newTodo.trim() !== '') {
      const newId = todos.length > 0 ? todos[todos.length - 1].id + 1 : 1;
      const newTodoItem = { id: newId, text: newTodo, isCompleted: false };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  }

  function handleDeleteAll() {
    setTodos([]);
  }

  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function handleHideCompleted() {
    // Toggle the visibility of completed todos
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.isCompleted ? { ...todo, isVisible: !todo.isVisible } : todo
      )
    );
  }

  function handleCheckboxChange(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }

  const filteredTodos = todos.filter((todo) => !todo.isVisible);

  return (
    <div className="max-w-md mx-auto rounded-md p-4 text-white">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="w-full p-2 border border-gray-700 rounded-md mb-4 bg-gray-900 text-white"
        placeholder="Add a new task"
      />
      <button
        onClick={handleAddTodo}
        className="w-full py-2 bg-blue-500 text-white rounded-md mb-4"
      >
        Add Todo
      </button>
      <button
        onClick={handleDeleteAll}
        className="w-full py-2 bg-red-500 text-white rounded-md mb-4"
      >
        Delete All
      </button>
      <button
        onClick={handleHideCompleted}
        className="w-full py-2 bg-gray-500 text-white rounded-md mb-4"
      >
        Hide Completed
      </button>
      <ul>
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCheckboxChange={handleCheckboxChange}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;