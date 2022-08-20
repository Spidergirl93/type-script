import React, { useState } from "react";
import { isPropertySignature, isTemplateSpan } from "typescript";

import Todo from "../models/Todo";

type TodoContextType = {
  items: Todo[];
  addItem: (itemTxt: string) => void;
  removeItem: (id: string) => void;
};

export const TodosContext = React.createContext<TodoContextType>({
  items: [],
  addItem: (itemTxt: string) => {},
  removeItem: (id: string) => {},
});

const TodoProvider: React.FC<{ children: any }> = (props) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addNewTodo = (todoText: string) => {
    setTodoList((prevState) => {
      return [...prevState, new Todo(todoText)];
    });
  };

  const removeTodo = (todoId:string) => {
    setTodoList(curState => {
      return curState.filter(todo => todo.id !== todoId);
    })
  }

  const todoListContext:TodoContextType  = {
    items: todoList,
    addItem: addNewTodo,
    removeItem: removeTodo

  }

  return <TodosContext.Provider value={todoListContext}>{props.children}</TodosContext.Provider>;
};

export default TodoProvider;
