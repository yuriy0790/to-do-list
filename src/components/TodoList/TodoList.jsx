import {
  // useDispatch,
  useSelector,
} from 'react-redux';

import styles from './TodoList.module.css';

// import { deleteTodo } from 'redux/todoSlice';

const TodoList = () => {
  // const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  // const onDeleteBtnClick = todoId => {
  //   const deletedTodo = todos.find(todo => todo.id === todoId);

  //   dispatch(deleteTodo(todoId));
  // };
  return (
    <>
      <ul>
        {todos.map(({ id, title, descr }) => (
          <li className={styles.listItem} key={id}>
            <p className={styles.contact}>{id}:</p>
            <p className={styles.contact}>{title}:</p>
            <p className={styles.contact}>{descr}</p>
            <input
              className={styles.input}
              // onChange={handleChange}
              type="checkbox"
              name="status"
            />
            {/* <button
              className={styles.delBtn}
              type="button"
              onClick={() => onDeleteBtnClick(id)}
            >
              Delete
            </button> */}
          </li>
        ))}
      </ul>
    </>
  );
};
export default TodoList;
