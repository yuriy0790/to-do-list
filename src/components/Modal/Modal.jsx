import { useDispatch, useSelector } from 'react-redux';
import { closeModalTodo, setTodoStatus } from 'redux/todoSlice';
import styles from './Modal.module.css';

export default function Modal() {
  const selectedTodo = useSelector(state => state.todos.fullTodoInfoModal);
  const { id, title, descr, status } = selectedTodo;
  const dispatch = useDispatch();

  const handleCheckboxChange = (id, status) => {
    dispatch(setTodoStatus({ id, status: !status }));
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h1>{title}</h1>
        <p>{descr}</p>
        <input
          type="checkbox"
          checked={status}
          onChange={() => handleCheckboxChange(id, status)}
        />
        <button type="button" onClick={() => dispatch(closeModalTodo())}>
          Close
        </button>
      </div>
    </div>
  );
}
