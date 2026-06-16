import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import FilterBar from "./components/FilterBar";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  // 追加関数
  const addTodo = () => {
    if (inputText.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputText,
      done: false,
    };
    setTodos([...todos, newTodo]);
    setInputText("");
  };

  // 削除関数
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  // activeCount は stateではなく計算結果
  const activeCount = todos.filter((todo) => !todo.completed).length;

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          // 💡 もしIDが一致したら、completed をひっくり返した新しいオブジェクトを返す
          return { ...todo, completed: !todo.completed };
        }
        // 💡 一致しなければ、そのまま何もせず返す
        return todo;
      }),
    );
  };
  return (
    <div className="app">
      <h1>Todoアプリ</h1>
      <AddTodoForm
        inputText={inputText}
        onInputChange={setInputText}
        onAddTodo={addTodo}
      />
      <FilterBar
        currentFilter={filter}
        onFilterChange={setFilter}
        activeCount={activeCount}
      />
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
}

export default App;
