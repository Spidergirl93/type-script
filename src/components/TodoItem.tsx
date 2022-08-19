import Todo from "../models/Todo";

import styles from "./TodoItem.module.css";

const TodoItem: React.FC<{ todo: Todo }> = (props) => {
  return <li className={styles.item} >{props.todo.text}</li>;
};

export default TodoItem;
