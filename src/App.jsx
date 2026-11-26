function Greeting({ name }) {
  return <h1>こんにちは、{name}さん！</h1>;
}

function App() {
  return (
    <div>
      <Greeting name="たぬみち" />
      <Greeting name="はなこ" />


      <button onClick={() => alert('こんにちは')}>あいさつする</button>
    </div>
  );
}

export default App;
