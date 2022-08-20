import React, { useRef, useContext } from "react";

import { TodosContext } from "../store/todos-context";

import styles from "./TodoForm.module.css";

const TodoForm: React.FC = () => {
  const { addItem } = useContext(TodosContext);

  const userInput = useRef<HTMLInputElement>(null);

  const addHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const finalInput = userInput.current!.value;

    if (finalInput.trim().length === 0) {
      return;
    }

    // props.addHandler(finalInput);
    addItem(finalInput);
  };

  return (
    <form className={styles.form} onSubmit={addHandler}>
      <label htmlFor="text">New To Do</label>
      <br />
      <input id="text" type="text" ref={userInput} />
      <button>Add</button>
    </form>
  );
};

export default TodoForm;
