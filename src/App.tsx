// App.tsx
import React, { useState } from "react";
import TodoList from "./components/TodoList";

export interface Todo {
  id: number;
  text: string;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  // Add new task
  const addTodo = () => {
    if (!input.trim()) return; // ignore blank
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput("");
  };

  // Delete task
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Reorder tasks after drag
  const reorderTodos = (startIndex: number, endIndex: number) => {
    const updated = Array.from(todos);
    const [removed] = updated.splice(startIndex, 1);
    updated.splice(endIndex, 0, removed);
    setTodos(updated);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-6">TypeScript To-Do List</h1>

      {/* Input */}
      <div className="flex mb-6 w-full max-w-md">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
          className="flex-1 p-2 border rounded-l shadow-sm"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-indigo-600 text-white rounded-r hover:bg-indigo-700 transition"
        >
          Add
        </button>
      </div>

      {/* Todo List */}
      <TodoList todos={todos} deleteTodo={deleteTodo} reorderTodos={reorderTodos} />
    </div>
  );
};

export default App;