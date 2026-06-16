import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos,setTodos] = useState([])
  const [inputText, setInputText] = useState("")

  // 追加関数（自分で実装）
  const addTodo = () => {
    if(inputText.trim() === "")return;

    const newTodo = {
      id: Date.now(),
      text: inputText,
      done: false,
    }
    setTodos([...todos, newTodo])
    setInputText("")
  }

  return (
    <div className="app">
      <h1>Todoアプリ</h1>
      <AddTodoForm
        inputText={inputText}
        onInputChange={setInputText}
        onAddTodo={addTodo}
      />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;