import TodoItem from "./TodoItem";

function TodoList({
  todos,
  onToggle,
  onDelete,
  onEdit,
  editingId,
  editingText,
  onEditingTextChange,
  onSave,
  onCancel,
}) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
          isEditing={editingId === todo.id}
          editingText={editingText}
          onEditingTextChange={onEditingTextChange}
          onSave={onSave}
          onCancel={onCancel}
        />
      ))}
    </ul>
  );
}

export default TodoList;