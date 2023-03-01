import { useDispatch, useSelector } from 'react-redux';

import styles from './TodoList.module.css';

import { openModalTodo, setTodoStatus } from 'redux/todoSlice';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos.items);

  // const onDeleteBtnClick = todoId => {
  //   const deletedTodo = todos.find(todo => todo.id === todoId);

  //   dispatch(deleteTodo(todoId));
  // };
  const onTodoClick = event => {
    if (event.target.type !== 'checkbox') {
      const clickedTodo = todos.find(
        el =>
          Number(el.id) ===
          Number(event.currentTarget.firstElementChild.textContent)
      );

      dispatch(openModalTodo(clickedTodo));
      return;
    }
  };

  const handleCheckboxChange = (id, status) => {
    dispatch(setTodoStatus({ id, status: !status }));
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.listItem}>
          <th>id</th>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(({ id, title, descr, status }) => (
          <tr key={id} onClick={onTodoClick} className={styles.listItem}>
            <td>{id}</td>
            <td>{title}</td>
            <td>{descr}</td>
            <td>
              <input
                type="checkbox"
                data-todo-id={id}
                name="status"
                onChange={() => handleCheckboxChange(id, status)}
                checked={status}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default TodoList;
