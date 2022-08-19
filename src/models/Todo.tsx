class Todo {
  id: string;
  text: string;

  constructor(itemText: string) {
    this.id = Math.random().toString();
    this.text = itemText;
  }
}

export default Todo;
