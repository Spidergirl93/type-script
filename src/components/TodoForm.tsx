import React, { useRef } from "react";


import styles from './TodoForm.module.css';

const TodoForm: React.FC<{addHandler: (itemText:string) => void}> = (props) => {
  const userInput = useRef<HTMLInputElement>(null);

  const addHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const finalInput = userInput.current!.value;

    if (finalInput.trim().length === 0)
    {
        return;
    }

    props.addHandler(finalInput);

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
