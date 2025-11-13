To-Do List Web Application (React + TypeScript + Tailwind CSS)

OVERVIEW

This project is a fully interactive To-Do List web application built using React, TypeScript, and Tailwind CSS.
It allows users to create, display, reorder, and manage tasks dynamically with drag-and-drop functionality.
The app demonstrates modern React state management, DOM manipulation, and clean UI/UX design practices.

FEATURES

Add Task

Users can add new tasks using an input field and “Add” button.

Blank inputs are not accepted.

Display Tasks

Tasks are displayed in a vertical list with clear separation and neat styling.

Delete Task

Each task includes a delete button (×) to remove it from the list instantly.

Reorder Tasks (Drag & Drop)

Tasks are fully draggable and droppable for reordering.

Swapping positions updates the list instantly with no duplicates or gaps.

Visual feedback indicates the current drag and drop target.

Extended Features (Bonus)

Persistent Storage

All tasks are automatically saved to the browser’s localStorage.

When the page reloads, tasks are restored automatically.

Task Completion

Each task includes a checkbox.

Completed tasks are visually marked with a strikethrough.

Categories/Sections

Tasks can be categorized under sections such as “Today” and “Tomorrow”.

Each category is managed separately for better organization.

Responsive Design

The UI adjusts smoothly for mobile, tablet, and desktop screens.

Navigation Bar and Footer

A fixed top navigation bar includes the To-Do logo and app title.

A simple footer is displayed at the bottom of the page.

TECHNOLOGIES USED


Frontend	React (with TypeScript)
Styling	Tailwind CSS
State Management	React useState Hooks
Persistence	localStorage API
Build Tool	Vite / Create React App
Installation and Setup
1. Clone the Repository
git clone https://github.com/yourusername/todo-react-ts.git
cd todo-react-ts


Project Structure
src/
│
├── components/
│   ├── TodoItem.tsx       # Individual task component
│   ├── TodoList.tsx       # Renders and manages drag-and-drop task list
│
├── App.tsx                # Main app logic and UI
├── index.tsx              # React DOM entry point
├── index.css              # Tailwind base styles
│
└── assets/
    └── logo.png           # To-Do App logo (optional)
![todo screenshoot](hhshshh)
