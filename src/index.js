import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Left,MyCard,Upgrades,Footer} from './components/ClickArea';
import BonkSoundEffect from './Bonk.mp3'
import Bonk1 from'./bonk1.png'
import Bonk2 from'./bonk2.png'


try{
  var clickAmount=JSON.parse(document.cookie)[0].clickAmount
  var autoClick=JSON.parse(document.cookie)[0].autoClick
  var upgrade_status=JSON.parse(document.cookie)[0].upgrade_status
  var costList=JSON.parse(document.cookie)[0].costList
  var autoPerSec=[1,2,8,47,260,1400,7800,44000]
  var ownedUpgrade=JSON.parse(document.cookie)[0].ownedUpgrade
  var nextSound=["sound1","sound2","sound3","sound4","sound5","sound6","sound7","sound8","sound9","sound10","sound11"]
}
catch(e)
{
  clickAmount=0
  autoClick=0
  upgrade_status=0
  costList=[15,100,1100,12000,130000,1400000,20000000,330000000]
  autoPerSec=[1,2,8,47,260,1400,7800,44000]
  ownedUpgrade=[0,0,0,0,0,0,0,0]
  nextSound=["sound1","sound2","sound3","sound4","sound5","sound6","sound7","sound8","sound9","sound10","sound11"]
}

class App extends React.Component{
  render(){
    return(
      <div>
      <audio id="sound1" src={BonkSoundEffect} preload="auto"></audio>
      <audio id="sound2" src={BonkSoundEffect} preload="auto"></audio>
      <audio id="sound3" src={BonkSoundEffect} preload="auto"></audio>
      <audio id="sound4" src={BonkSoundEffect} preload="auto"></audio>
      <audio id="sound5" src={BonkSoundEffect} preload="auto"></audio>
      <audio id="sound6" src={BonkSoundEffect} preload="auto"></audio>
      <audio id="sound7" src={BonkSoundEffect} preload="auto"></audio>
      <audio id="sound8" src={BonkSoundEffect} preload="auto"></audio>
      <audio id="sound9" src={BonkSoundEffect} preload="auto"></audio>
      <audio id="sound10" src={BonkSoundEffect} preload="auto"></audio>
      <audio id="sound11" src={BonkSoundEffect} preload="auto"></audio>
      <Left title="強化"/>
      <MyCard title="點擊區" text={clickAmount} auto={autoClick}/>
      <Upgrades title="升級" autoPerSec={autoPerSec} cost={costList}ownedUpgrade={ownedUpgrade}/>
      <Footer></Footer>
      </div>
    )
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);

//查看升級狀態
function checkUpgradeStatus(i){
 if(i<upgrade_status){
   return (upgrade_status)
 }
 else{
   return i
 }
}

//查看當前升級狀態後顯示對應升級進度
function checkUpgrade(){
  for(let i=0;i<=upgrade_status;i++){
    try{
      document.querySelector(".upgradeContainer").childNodes[i].classList.remove("d-none")
    }
    catch(e){
      
    }
  }
}

//控制是否能夠升級
function ifCanUpgrade(){
  for(var i=0;i<costList.length;i++)
  {
    try{
      if(clickAmount<costList[i]){
        document.querySelectorAll('.upgradeButton')[i].disabled=1
      }
      else{
        document.querySelectorAll('.upgradeButton')[i].disabled=0
      }
    }
    catch(e){
      
    }
  }
}

//Bonk動畫
document.querySelectorAll(".card")[1].lastChild.lastChild.addEventListener("mousedown",function(){
  document.querySelector(".bonk").src=Bonk2
})
document.querySelectorAll(".card")[1].lastChild.lastChild.addEventListener("mouseup",function(){
  document.querySelector(".bonk").src=Bonk1
})


//點擊並發出bonk音效
document.querySelectorAll(".card")[1].lastChild.lastChild.addEventListener("click",function(){
  clickAmount=parseInt(clickAmount,10)
  clickAmount+=1
  document.getElementById(nextSound[0]).play()
  var soundCount=0
  while(document.getElementById(nextSound[soundCount]).currentTime!=0)
  {
    document.getElementById(nextSound[soundCount+1]).play()
    soundCount+=1
  }
  document.querySelectorAll(".card")[1].lastChild.childNodes[1].innerHTML = "你已經被屁了"+clickAmount+"次"+",每秒自動屁"+autoClick+"次";
  ifCanUpgrade()
})

//自動屁升級
for(let i=0;i<document.querySelectorAll(".upgradeButton").length;i++)
{
  document.querySelectorAll(".upgradeButton")[i].addEventListener("click",function(){
    autoClick+=autoPerSec[i]
    upgrade_status=checkUpgradeStatus(i+1)
    ownedUpgrade[i]+=1
    clickAmount-=costList[i]
    costList[i]=Math.ceil(costList[i]*1.15)
    document.querySelectorAll(".ownedUpgrade")[i].childNodes[1].textContent=ownedUpgrade[i]
    document.querySelectorAll(".cost")[i].innerText=costList[i]+'ϝ'
    document.querySelectorAll(".card")[1].lastChild.childNodes[1].innerHTML = "你已經被屁了"+clickAmount+"次"+",每秒自動屁"+autoClick+"次";
    ifCanUpgrade()
    try{
      document.querySelectorAll(".upgrade_detail")[i+1].classList.remove("d-none")
    }
    catch(e)
    {
      console.log("no more!")
    }
  })
}

//自動屁
var clicksPerSecond = setInterval(myAlert, 1000);
function myAlert() {
  // console.log('1秒鐘到了！,每秒+'+autoClick);
  clickAmount+=autoClick
  document.querySelectorAll(".card")[1].lastChild.childNodes[1].innerHTML = "你已經被屁了"+clickAmount+"次"+",每秒自動屁"+autoClick+"次";
  ifCanUpgrade()
}
//存檔(每一分鐘)
var saveTimer= setInterval(save,6000)
function save(){
  var info=[{clickAmount:clickAmount,autoClick:autoClick,upgrade_status:upgrade_status,costList:costList,ownedUpgrade:ownedUpgrade}]
  var info_json=JSON.stringify(info)
  document.cookie=info_json+"; expires=Thu, 18 Dec 2022 12:00:00 GMT; path=/";
  console.log("saved!")
}

ifCanUpgrade()
checkUpgrade()