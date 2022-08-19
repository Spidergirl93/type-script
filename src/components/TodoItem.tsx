import Todo from "../models/Todo";

import styles from "./TodoItem.module.css";

const TodoItem: React.FC<{
  todo: Todo;
  deleteItemHandler: () => void;
}> = (props) => {
  return (
    <li className={styles.item} onClick={props.deleteItemHandler}>
      {props.todo.text}
    </li>
  );
};

export default TodoItem;
