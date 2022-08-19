import Todo from "../models/Todo";
import TodoItem from "./TodoItem";

import styles from "./Todos.module.css";

const Todos: React.FC<{
  items: Todo[];
  deleteItem: (itemId: string) => void;
}> = (props) => {
  const deleteHandler = (itemId: string) => {
    props.deleteItem(itemId);
  };

  return (
    <ul className={styles.todos}>
      {props.items.map((item) => (
        <TodoItem key={item.id} todo={item} deleteItemHandler={deleteHandler} />
      ))}
    </ul>
  );
};

export default Todos;
