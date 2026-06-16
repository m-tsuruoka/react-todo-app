// src/hooks/useTodos.js
import { useState, useEffect } from "react";

export const useTodos = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [inputText, setInputText] = useState("");
  const [filter, setFilter] = useState("all");

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

  // 💡 あなたが書いてくれた最強の詰め合わせセットを外に返す！
  return {
    todos,
    inputText,
    setInputText,
    filter,
    setFilter,
    filteredTodos,
    activeCount,
    addTodo,
    deleteTodo,
    toggleTodo,
  };
};