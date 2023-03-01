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
    if (title === '') {
      document.querySelector('#title').classList.add('onError');
      document.querySelector('#label').classList.add('errorMsg');

      return;
    }
    document.querySelector('#title').classList.remove('onError');
    document.querySelector('#label').classList.remove('errorMsg');
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
      <div className={styles.inputsWrap}>
        <label htmlFor="title" className={styles.label} id="label">
          Title:
        </label>
        <input
          className={styles.input}
          placeholder="Enter title"
          onChange={handleChange}
          value={title}
          type="text"
          name="title"
          id="title"
        />
        <label htmlFor="descr" className={styles.label}>
          Description:
        </label>
        <input
          className={styles.input}
          placeholder="Enter description"
          onChange={handleChange}
          value={descr}
          type="text"
          name="descr"
        />
      </div>
      <button type="submit" className={styles.gradientButton}>
        Create
      </button>
    </form>
  );
}
