import React from "react";
import type { Todo } from "../App";
//import { Todo } from "../App";

interface Props {
  todo: Todo;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, deleteTodo }) => {
  return (
    <div className="flex justify-between items-center p-3 bg-white shadow rounded hover:shadow-lg transition">
      <span>{todo.text}</span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 font-bold hover:text-red-700 transition"
      >
        &times;
      </button>
    </div>
  );
};

export default TodoItem;

