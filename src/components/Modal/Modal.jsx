import { useEffect } from 'react';
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

  const onCloseBtnClick = () => {
    dispatch(closeModalTodo());
  };

  const onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      dispatch(closeModalTodo());
    }
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        dispatch(closeModalTodo());
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);

  return (
    <div className={styles.overlay} onClick={onBackdropClick}>
      <div className={styles.modal}>
        <h1>{title}</h1>
        <p>{descr}</p>
        <input
          type="checkbox"
          checked={status}
          onChange={() => handleCheckboxChange(id, status)}
        />
        <button type="button" onClick={onCloseBtnClick}>
          Close
        </button>
      </div>
    </div>
  );
}
