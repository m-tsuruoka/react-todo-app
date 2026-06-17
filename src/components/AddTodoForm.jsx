function AddTodoForm({ inputText, onInputChange, onAddTodo }) {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTodo(); 
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input
        type="text"
        value={inputText}              // 親から届いた入力テキスト
        onChange={(e) => onInputChange(e.target.value)} // 💡 自分で実装の部分：親のStateを更新する
        placeholder="Todoを入力..."
        required
      />
      <button className="form-btn" type="submit">追加</button>
      <p></p>
    </form>
  );
}

export default AddTodoForm;