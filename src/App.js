import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const consolelog = () => {
    console.log(text);
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input value={text} onChange={onChange} type="text"></input>

      <button onClick={consolelog}>Add</button>
    </div>
  );
}

export default App;
