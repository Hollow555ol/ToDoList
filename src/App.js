import { useState } from "react";
import List from "./components/List/List";

function App() {
  const [state, setState] = useState({ text: "", todoes: [] });

  const createTodo = () => {
    setState((oldState) => {
      return {
        text: "",
        todoes: [...oldState.todoes, { id: new Date(), title: oldState.text }],
      };
    });
  };

  const removeTodo = (id) => {
    setState((oldState) => {
      return {
        text: oldState.text,
        todoes: oldState.todoes.filter((todo) => todo.id !== id),
      };
    });
  };

  const onChange = (e) => {
    setState((oldState) => {
      return { ...oldState, text: e.target.value };
    });
  };

  return (
    <div>
      <input value={state.text} onChange={onChange} type="text"></input>
      <button onClick={createTodo}>Add</button>
      <List remove={removeTodo} todoes={state.todoes} />
    </div>
  );
}

export default App;
