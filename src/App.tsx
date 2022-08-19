import { useState } from "react";

import Todos from "./components/Todos";
import Todo from "./models/Todo";
import TodoForm from "./components/TodoForm";

const DUMMY_ITEMS: Todo[] = [new Todo("go out"), new Todo("come in")];

function App() {
  const [items, setItems] = useState(DUMMY_ITEMS);

  const addToItems = (itemTxt: string) => {
    const newItem = new Todo(itemTxt);
    setItems((prevItems) => {
      return [...prevItems, newItem];
    })
  };

  return (
    <div>
      <TodoForm addHandler={addToItems} />
      <Todos items={items} />
    </div>
  );
}

export default App;
