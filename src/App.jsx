import { useState } from "react";

function Greeting({ name }) {
  return <h1>こんにちは、{name}さん！</h1>;
}

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <Greeting name="たろう" />
      <Greeting name="はなこ" />

      <p>クリック回数：{count}</p>
      <button onClick={() => setCount(count + 1)}>
        1増やす
      </button>
    </div>
  );
}

export default App;