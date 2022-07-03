import { useState } from "react";
import List from "./components/List/List";

function App() {
  const [state, setState] = useState({ text: "", todoes: [] });

  const createTodo = () => {
    setState({
      text: "",
      todoes: [...state.todoes, { id: new Date(), title: state.text }],
    });
  };

  const removeTodo = (id) => {
    setState({
      text: state.text,
      todoes: state.todoes.filter((todo) => todo.id !== id),
    });
  };

  const onChange = (e) => {
    setState({ ...state, text: e.target.value });
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
