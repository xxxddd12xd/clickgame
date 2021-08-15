function Welcome(props) {
  return <div ><h1>Hello, {props.name}</h1></div>;
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


ReactDOM.render(
  <App />,
  document.getElementById('root')
);