import React from "react";
import TodoItem from "./TodoItem";
import type { Todo } from "../App";

interface Props {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  reorderTodos: (startIndex: number, endIndex: number) => void;
}

const TodoList: React.FC<Props> = ({ todos, deleteTodo, reorderTodos }) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    const startIndex = Number(e.dataTransfer.getData("text/plain"));
    reorderTodos(startIndex, index);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();

  return (
    <div className="w-full max-w-md flex flex-col gap-2">
      {todos.map((todo, index) => (
        <div
          key={todo.id}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDrop={(e) => handleDrop(e, index)}
          onDragOver={handleDragOver}
        >
          <TodoItem todo={todo} deleteTodo={deleteTodo} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
