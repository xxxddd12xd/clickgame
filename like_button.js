function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}



const element = <Welcome name="1" />;
const element2 = <Welcome name="2" />;
const element3 = <Welcome name="3" />;
ReactDOM.render(
  element,
  element2,
  element3,
  document.getElementById('root')
);