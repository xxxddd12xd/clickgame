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



//test

//test
try{
  var clickAmount=JSON.parse(document.cookie)[0].clickAmount
}
catch(e)
{
  var clickAmount=0
}
document.querySelectorAll(".card")[1].lastChild.lastChild.addEventListener("click",function(){
  clickAmount=parseInt(clickAmount,10)
  clickAmount+=1
  document.querySelectorAll(".card")[1].lastChild.childNodes[1].innerHTML = "你已經屁了"+clickAmount+"次";
  var info=[{clickAmount:clickAmount,money:'999'}]
  var info_json=JSON.stringify(info)
  document.cookie=info_json+"; expires=Thu, 18 Dec 2022 12:00:00 GMT; path=/";
})

