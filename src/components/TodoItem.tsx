import React from "react";
import type { Todo } from "../App";

interface Props {
  todo: Todo;
  deleteTodo: (id: number) => void;
  toggleComplete: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, deleteTodo, toggleComplete }) => {
  return (
    <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow hover:shadow-lg transition border border-gray-100">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="w-5 h-5 text-indigo-500 rounded focus:ring-pink-300"
        />
        <span
          className={`text-sm sm:text-base ${
            todo.completed
              ? "line-through text-gray-400"
              : "text-gray-700 font-medium"
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-pink-500 hover:text-red-500 text-xl font-bold transition"
      >
        ×
      </button>
    </div>
  );
};

export default TodoItem;
