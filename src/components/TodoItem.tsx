import Todo from "../models/Todo";

import styles from "./TodoItem.module.css";

const TodoItem: React.FC<{
  todo: Todo;
  deleteItemHandler: (itemId: string) => void;
}> = (props) => {
  const deleteHandler = () => {
    props.deleteItemHandler(props.todo.id);
  };

  return (
    <li className={styles.item} onClick={deleteHandler}>
      {props.todo.text}
    </li>
  );
};

export default TodoItem;
