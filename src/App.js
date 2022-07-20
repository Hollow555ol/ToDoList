import { useState } from "react";
import List from "./components/List/List";
import classes from "./App.module.css";

function App() {
  const [state, setState] = useState({ text: "", todoes: [] });

  const createTodo = () => {
    if (state.text.trim().length > 0) {
      setState((oldState) => {
        return {
          text: "",
          todoes: [
            ...oldState.todoes,
            { id: new Date(), title: oldState.text },
          ],
        };
      });
    }
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
    <div className={classes.body}>
      <div className={classes.app}>
        <div className={classes.todoContainer}>
          <h1 className={classes.title}>To Do App</h1>
          <div className={classes.inputContainer}>
            <input
              className={classes.input}
              value={state.text}
              onChange={onChange}
              type="text"
              placeholder="to do"
            ></input>
            <button className={classes.button} onClick={createTodo}>
              +
            </button>
          </div>

          {state.todoes.length > 0 && (
            <>
              <hr className={classes.horisontalLine} />
              <List remove={removeTodo} todoes={state.todoes} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
