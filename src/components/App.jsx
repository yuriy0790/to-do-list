import { useDispatch, useSelector } from 'react-redux';

import AddTodoForm from './AddTodoForm/AddTodoForm';
import TodoList from './TodoList/TodoList';
import Modal from './Modal/Modal';
import styles from './Container/Container.module.css';

export const App = () => {
  const todos = useSelector(state => state.todos.items);
  const selectedTodo = useSelector(state => state.todos.fullTodoInfoModal);
  return (
    <div className={styles.container}>
      <h1>TO DO LIST</h1>
      <AddTodoForm />
      {todos.length > 0 ? <TodoList /> : <p>Add something using form above</p>}
      {selectedTodo && <Modal />}
    </div>
  );
};
