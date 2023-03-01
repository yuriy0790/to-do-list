import { useState } from 'react';
import {
  // useSelector,
  useDispatch,
} from 'react-redux';

import styles from './AddTodoForm.module.css';

import { addTodo } from 'redux/todoSlice';
let lastId = 0;
export default function AddTodoForm() {
  const dispatch = useDispatch();
  // const todos = useSelector(state => state.todos.items);

  const [title, setTitle] = useState('');
  const [descr, setDescr] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'title':
        setTitle(value);
        break;

      case 'descr':
        setDescr(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    lastId++;
    const todo = {
      id: lastId,
      title: title,
      descr: descr,
      status: false,
    };
    dispatch(addTodo(todo));
    reset();
  };

  const reset = () => {
    setTitle('');
    setDescr('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Title:
        <input
          className={styles.input}
          placeholder="Enter title"
          onChange={handleChange}
          value={title}
          type="text"
          name="title"
          required
        />
      </label>
      <label className={styles.label}>
        Description:
        <input
          className={styles.input}
          placeholder="Enter description"
          onChange={handleChange}
          value={descr}
          type="text"
          name="descr"
          required
        />
      </label>
      <button type="submit" className={styles.gradientButton}>
        Create
      </button>
    </form>
  );
}
