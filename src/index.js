import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Left,MyCard,Upgrades,Footer} from './components/ClickArea';

try{
  var clickAmount=JSON.parse(document.cookie)[0].clickAmount
  var autoClick=JSON.parse(document.cookie)[0].autoClick
  var upgrade_status=JSON.parse(document.cookie)[0].upgrade_status
  var costList=JSON.parse(document.cookie)[0].costList
  var autoPerSec=[1,2,8,47]
}
catch(e)
{
  clickAmount=0
  autoClick=0
  upgrade_status=0
  costList=[15,100,1100,12000]
  autoPerSec=[1,2,8,47]
}

class App extends React.Component{
  render(){
    return(
      <div>
      <Left title="左邊"/>
      <MyCard title="點擊區" text={clickAmount} auto={autoClick}/>
      <Upgrades title="右邊" autoPerSec={autoPerSec} detail={costList}/>
      <Footer></Footer>
      </div>
    )
  }
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
  document.querySelectorAll(".upgrade_detail")[1].classList.remove("d-none")
})

//自動屁升級2
document.querySelectorAll(".upgradeButton")[1].addEventListener("click",function(){
  autoClick+=2
  upgrade_status=2
  clickAmount-=costList[1]
  costList[1]=Math.ceil(costList[1]*1.15)
  document.querySelectorAll(".cost")[1].innerText=costList[1]+'ϝ'
  document.querySelectorAll(".card")[1].lastChild.childNodes[1].innerHTML = "你已經屁了"+clickAmount+"次"+",每秒自動屁"+autoClick+"次";
  ifCanUpgrade()
  document.querySelectorAll(".upgrade_detail")[2].classList.remove("d-none")
})

//自動屁升級3
document.querySelectorAll(".upgradeButton")[2].addEventListener("click",function(){
  autoClick+=8
  upgrade_status=3
  clickAmount-=costList[2]
  costList[2]=Math.ceil(costList[2]*1.15)
  document.querySelectorAll(".cost")[2].innerText=costList[2]+'ϝ'
  document.querySelectorAll(".card")[1].lastChild.childNodes[1].innerHTML = "你已經屁了"+clickAmount+"次"+",每秒自動屁"+autoClick+"次";
  ifCanUpgrade()
  document.querySelectorAll(".upgrade_detail")[3].classList.remove("d-none")
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
var saveTimer= setInterval(save,60000)
function save(){
  var info=[{clickAmount:clickAmount,autoClick:autoClick,upgrade_status:upgrade_status,costList:costList}]
  var info_json=JSON.stringify(info)
  document.cookie=info_json+"; expires=Thu, 18 Dec 2022 12:00:00 GMT; path=/";
  console.log("saved!")
}

ifCanUpgrade()
checkUpgrade()