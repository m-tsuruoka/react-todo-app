import "../App.css";
function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span className={todo.completed ? "todo-text completed" : "todo-text"}>{todo.text}</span>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>削除</button>
    </li>
  );
}

export default TodoItem;