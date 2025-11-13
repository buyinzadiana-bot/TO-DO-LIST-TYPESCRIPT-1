import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
  category: "Today" | "Tomorrow" | "Upcoming";
}

const STORAGE_KEY = "todos-v1";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");
  const [category, setCategory] = useState<Todo["category"]>("Today");

  const categories: Todo["category"][] = ["Today", "Tomorrow", "Upcoming"];

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  // Add Task
  const addTodo = () => {
    if (!input.trim()) return;
    const newTodo: Todo = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
      category,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  // Delete
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  // Toggle Complete
  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // Reorder within category
  const reorderTodos = (
    startIndex: number,
    endIndex: number,
    category: Todo["category"]
  ) => {
    const catTodos = todos.filter((t) => t.category === category);
    const [moved] = catTodos.splice(startIndex, 1);
    catTodos.splice(endIndex, 0, moved);
    const other = todos.filter((t) => t.category !== category);
    setTodos([...other, ...catTodos]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-indigo-100 to-cyan-100 flex flex-col items-center">
      {/* 🌸 Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-pink-700 via-indigo-700 to-purple-900 shadow-lg z-10">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3176/3176366.png"
              alt="logo"
              className="w-8 h-8"
            />
            <h1 className="text-white font-bold text-xl drop-shadow">
              To-Do Buddy 🌼
            </h1>
          </div>
          <p className="text-white/90 text-sm hidden sm:block">
            Stay organized, stay cute 💖
          </p>
        </div>
      </nav>

      {/* main content */}
      <div className="pt-24 w-full max-w-5xl px-4 flex flex-col items-center">
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl w-full max-w-2xl p-6">
          {/* Input Section */}
          <div className="flex flex-col sm:flex-row gap-2 mb-6">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="What do you want to achieve today?"
              className="flex-1 p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-pink-300 focus:outline-none"
            />
            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value as Todo["category"])
              }
              className="p-3 rounded-lg border border-gray-200 bg-white focus:ring-2 focus:ring-indigo-300"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
            <button
              onClick={addTodo}
              className="bg-indigo-500 text-white px-6 py-3 rounded-lg hover:bg-indigo-600 transition shadow-md"
            >
              Add ✨
            </button>
          </div>
        </div>

        {/* Todo Lists by Category */}
        <div className="grid gap-6 mt-8 w-full max-w-5xl md:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md p-4"
            >
              <h2 className="text-lg font-semibold text-indigo-700 border-b border-indigo-200 pb-2 mb-3 flex items-center gap-1">
                <span>📅</span> {cat}
              </h2>
              <TodoList
                todos={todos.filter((t) => t.category === cat)}
                deleteTodo={deleteTodo}
                toggleComplete={toggleComplete}
                reorderTodos={(s, e) => reorderTodos(s, e, cat)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto w-full bg-gradient-to-r from-pink-700 via-indigo-700 to-purple-900 text-white text-center py-4 shadow-inner fixed bottom-0 left-0">
        <p className="text-sm">
          Made with 💜 by <span className="font-semibold">Diana</span> — Stay Organised 🌟
        </p>
      </footer>
    </div>
  );
};

export default App;