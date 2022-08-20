

import Todos from "./components/Todos";
import Todo from "./models/Todo";
import TodoForm from "./components/TodoForm";

const DUMMY_ITEMS: Todo[] = [new Todo("go out"), new Todo("come in")];

function App() {
  

  return (
    <div>
      <TodoForm  />
      <Todos />
    </div>
  );
}

export default App;
