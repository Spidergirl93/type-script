import Todo from "../models/Todo";
import TodoItem from "./TodoItem";

import styles from "./Todos.module.css";

const Todos: React.FC<{
  items: Todo[];
  deleteItem: (itemId: string) => void;
}> = (props) => {
  return (
    <ul className={styles.todos}>
      {props.items.map((item) => (
        <TodoItem key={item.id} todo={item} deleteItemHandler={props.deleteItem.bind(null, item.id)} />
      ))}
    </ul>
  );
};

export default Todos;
