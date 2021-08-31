import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Left,MyCard,Upgrades} from './components/ClickArea';

try{
  var clickAmount=JSON.parse(document.cookie)[0].clickAmount
  var autoClick=JSON.parse(document.cookie)[0].autoClick
}
catch(e)
{
  var clickAmount=0
  var autoClick=0
}


function App() {
  return (
    <div>
  <Left title="左邊"/>
  <MyCard title="點擊區" text={clickAmount}auto={autoClick}/>
  <Upgrades title="右邊"/>
    </div>
  );
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);


//點擊
document.querySelectorAll(".card")[1].lastChild.lastChild.addEventListener("click",function(){
  clickAmount=parseInt(clickAmount,10)
  clickAmount+=1
  document.querySelectorAll(".card")[1].lastChild.childNodes[1].innerHTML = "你已經屁了"+clickAmount+"次"+",每秒自動屁"+autoClick+"次";
})
//自動屁升級
document.querySelectorAll(".card")[2].lastChild.lastChild.lastChild.lastChild.lastChild.lastChild.addEventListener("click",function(){
  autoClick+=1
  document.querySelectorAll(".card")[1].lastChild.childNodes[1].innerHTML = "你已經屁了"+clickAmount+"次"+",每秒自動屁"+autoClick+"次";
  // console.log(autoClick)
})

//自動屁
var clicksPerSecond = setInterval(myAlert, 1000);
function myAlert() {
  // console.log('1秒鐘到了！,每秒+'+autoClick);
  clickAmount+=autoClick
  document.querySelectorAll(".card")[1].lastChild.childNodes[1].innerHTML = "你已經屁了"+clickAmount+"次"+",每秒自動屁"+autoClick+"次";
}
//存檔(每一分鐘)
var saveTimer= setInterval(save,60000)
function save(){
  var info=[{clickAmount:clickAmount,autoClick:autoClick}]
  var info_json=JSON.stringify(info)
  document.cookie=info_json+"; expires=Thu, 18 Dec 2022 12:00:00 GMT; path=/";
  console.log("saved!")
}