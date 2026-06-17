// src/hooks/useTodos.js
import { useState, useEffect } from "react";

export const useTodos = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [inputText, setInputText] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const startEdit = (todo) => {
  setEditingId(todo.id);
  setEditingText(todo.text);
};
const cancelEdit = () => {
  setEditingId(null);
  setEditingText("");
};

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  // 追加関数
  const addTodo = () => {
    if (inputText.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputText,
      completed: false, // 💡 done から completed に統一！
    };
    setTodos([...todos, newTodo]);
    setInputText("");
  };

  //編集
const editTodo = () => {
  if (editingText.trim() === "") return;

  setTodos(
    todos.map((todo) =>
      todo.id === editingId
        ? { ...todo, text: editingText }
        : todo
    )
  );

  setEditingId(null);
  setEditingText("");
};

  // 削除関数
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // フィルター処理
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  // 未完了のカウント
  const activeCount = todos.filter((todo) => !todo.completed).length;

  // トグル関数
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

return {
  todos,
  inputText,
  setInputText,
  filter,
  setFilter,
  filteredTodos,
  activeCount,
  addTodo,
  editTodo,
  deleteTodo,
  toggleTodo,
  cancelEdit,
  editingId,
  editingText,
  setEditingText,
  startEdit,
};
};