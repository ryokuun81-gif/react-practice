import { useState } from "react";

function Greeting({ name }) {
  return <p>こんにちは、{name}さん！</p>;
}

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  
  return (

    <div>
      <Greeting name="たろう" />
      <Greeting name="はなこ" />

      <p>クリック回数：{count}</p>
      <button onClick={() => setCount(count + 1)}>
        1増やす
      </button>

      <label>
        名前:
        <input
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
      </label>
      
      <p>
        {name === "" ? (
          <p>名前を入力してください</p>
          ) : (
            <Greeting name={name} />
          )}
      </p>

    </div>
  );
}

export default App;