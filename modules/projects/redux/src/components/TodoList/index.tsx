import { useSelector } from 'react-redux';

export const TodoList = () => {
  const todos = useSelector((store) => store.todo);

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
};
