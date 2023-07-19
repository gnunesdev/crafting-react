import { FormEvent, useState } from 'react';

export const AddTodo = () => {
  const [newTodo, setNewTodo] = useState('');

  function handleAddNewTodo(e: FormEvent) {
    e.preventDefault();

    console.log(newTodo);
  }

  return (
    <form onSubmit={handleAddNewTodo}>
      <input
        type="text"
        placeholder="Add new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit">Adicionar todo</button>
    </form>
  );
};
