function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}
function App2() {
  return (
    <div>
      <Welcome name="1" />
      <Welcome name="2" />
      <Welcome name="3" />
    </div>
  );
}
function App3() {
  return (
    <div>
      <Welcome name="4" />
      <Welcome name="5" />
      <Welcome name="6" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  <App2 />,
  <App3 />,
  document.getElementById('root')
);