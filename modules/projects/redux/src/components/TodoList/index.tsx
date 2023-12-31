import { useAppSelector } from '../../store';

export const TodoList = () => {
  const todos = useAppSelector((store) => store.todo);

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
};
