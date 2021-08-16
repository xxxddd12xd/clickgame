import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyCard from './components/ClickArea';

function App() {
  return (
    <div>
  <MyCard title="肉便區"/>
  <MyCard title="點擊區"/>
  <MyCard title="超級肉便區"/>
    </div>
  );
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
