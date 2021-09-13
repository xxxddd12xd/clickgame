import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Left,MyCard,Upgrades} from './components/ClickArea';

try{
  var clickAmount=JSON.parse(document.cookie)[0].clickAmount
  var autoClick=JSON.parse(document.cookie)[0].autoClick
  var upgrade_status=JSON.parse(document.cookie)[0].upgrade_status
  var costList=JSON.parse(document.cookie)[0].costList
}
catch(e)
{
  var clickAmount=0
  var autoClick=0
  var upgrade_status=0
  costList=[15,100]
}


function App() {
  return (
    <div>
  <Left title="左邊"/>
  <MyCard title="點擊區" text={clickAmount}auto={autoClick}/>
  <Upgrades title="右邊" detail={costList}/>
    </div>
  );
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);

//查看當前升級狀態後顯示對應升級進度
function checkUpgrade(){
  for(var i=0;i<=upgrade_status;i++){
    document.querySelector(".upgradeContainer").childNodes[i].classList.remove("d-none")
  }
}

//控制是否能夠升級
function ifCanUpgrade(){
  for(var i=0;i<costList.length;i++)
  {
    if(clickAmount<costList[i]){
      document.querySelectorAll('.upgradeButton')[i].disabled=1
    }
    else{
      document.querySelectorAll('.upgradeButton')[i].disabled=0
    }
  }
}



//點擊
document.querySelectorAll(".card")[1].lastChild.lastChild.addEventListener("click",function(){
  clickAmount=parseInt(clickAmount,10)
  clickAmount+=1
  document.querySelectorAll(".card")[1].lastChild.childNodes[1].innerHTML = "你已經屁了"+clickAmount+"次"+",每秒自動屁"+autoClick+"次";
  ifCanUpgrade()
})
//自動屁升級1
document.querySelectorAll(".upgradeButton")[0].addEventListener("click",function(){
  autoClick+=1
  upgrade_status=1
  clickAmount-=costList[0]
  costList[0]=Math.ceil(costList[0]*1.15)
  document.querySelectorAll(".cost")[0].innerText=costList[0]+'ϝ'
  document.querySelectorAll(".card")[1].lastChild.childNodes[1].innerHTML = "你已經屁了"+clickAmount+"次"+",每秒自動屁"+autoClick+"次";
  ifCanUpgrade()
  // console.log(autoClick)
  document.querySelector(".upgrade2").classList.remove("d-none")
})

//自動屁
var clicksPerSecond = setInterval(myAlert, 1000);
function myAlert() {
  // console.log('1秒鐘到了！,每秒+'+autoClick);
  clickAmount+=autoClick
  document.querySelectorAll(".card")[1].lastChild.childNodes[1].innerHTML = "你已經屁了"+clickAmount+"次"+",每秒自動屁"+autoClick+"次";
  ifCanUpgrade()
}
//存檔(每一分鐘)
var saveTimer= setInterval(save,6000)
function save(){
  var info=[{clickAmount:clickAmount,autoClick:autoClick,upgrade_status:upgrade_status,costList:costList}]
  var info_json=JSON.stringify(info)
  document.cookie=info_json+"; expires=Thu, 18 Dec 2022 12:00:00 GMT; path=/";
  console.log("saved!")
}

ifCanUpgrade()
checkUpgrade()