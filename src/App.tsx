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

  const onDeleteItem = (itemId:string) => {
    setItems(prevItems => {
      const newItems = prevItems.filter(item => item.id !== itemId);
      return newItems;
    })
  }

  return (
    <div>
      <TodoForm addHandler={addToItems} />
      <Todos items={items} deleteItem={onDeleteItem} />
    </div>
  );
}

export default App;
