import { useTodos } from "./hooks/useTodos";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import FilterBar from "./components/FilterBar";

function App() {
  const {
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
  onEdit={startEdit}
  editingId={editingId}
  editingText={editingText}
  onEditingTextChange={setEditingText}
  onSave={editTodo}
  onCancel={cancelEdit}
/>
    </div>
  );
}

export default App;