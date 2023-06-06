import React from 'react';

const TodoItem = ({ todo, onCheckboxChange, onDelete }) => {
  const { id, text, isCompleted } = todo;

  function handleCheckboxChange() {
    onCheckboxChange(id);
  }

  function handleDelete() {
    onDelete(id);
  }

  return (
    <li className="flex items-center mb-2 bg-gray-700 rounded-md p-3">
      <input
        type="checkbox"
        className="mr-3"
        onChange={handleCheckboxChange}
        checked={isCompleted}
      />
      <span className={`flex-1 text-white ${isCompleted ? 'line-through' : ''}`}>
        {text}
      </span>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md"
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
