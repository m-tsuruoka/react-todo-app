import { useTodos } from "./hooks/useTodos";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import FilterBar from "./components/FilterBar";

function App() {
  const {
    inputText,
    setInputText,
    addTodo,
    filter,
    setFilter,
    activeCount,
    filteredTodos,
    toggleTodo,
    deleteTodo
  } = useTodos();

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