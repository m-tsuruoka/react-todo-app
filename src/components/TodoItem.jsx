import "../App.css";
function TodoItem({ todo, onToggle, onDelete, onEdit, isEditing, editingText, onEditingTextChange, onSave, onCancel }) {
    if (isEditing) {
    return (
      <li className="todo-item">
        <input 
          type="text" 
          value={editingText} 
          onChange={(e) => onEditingTextChange(e.target.value)} 
        />
        <button onClick={() => onSave(todo.id)}>保存</button>
        <button onClick={onCancel}>キャンセル</button>
      </li>
    );
  }else{
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span className={todo.completed ? "todo-text completed" : "todo-text"}>{todo.text}</span>
      <button className="edit-btn" onClick={() => onEdit(todo.id, todo.text) }>編集</button>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>削除</button>
    </li>
  );
}
}

export default TodoItem;