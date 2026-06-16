import { useState } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos,setTodos] = useState([])
  const [inputText, setInputText] = useState("")

  // 追加関数
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
  
  // 削除関数
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  

  return (
    <div className="app">
      <h1>Todoアプリ</h1>
      <AddTodoForm
        inputText={inputText}
        onInputChange={setInputText}
        onAddTodo={addTodo}
      />
      <TodoList todos={todos} onDelete={deleteTodo}/>
    </div>
  );
}

export default App;