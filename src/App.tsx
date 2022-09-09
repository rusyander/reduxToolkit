import react, { useState } from "react";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlise";

function App() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const addTask = () => {
    dispatch(addTodo({ text }));
    setText("");
  };

  return (
    <div className="App">
      <h1>ReduxToolkit</h1>
      <TodoForm text={text} setText={setText} addTask={addTask} />
      <TodoList />
    </div>
  );
}

export default App;
