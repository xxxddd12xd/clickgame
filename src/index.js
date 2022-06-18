import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Left,MyCard,Upgrades,Footer} from './components/ClickArea';
import BonkSoundEffect from './Bonk.mp3'
import Bonk1 from'./bonk1.png'
import Bonk2 from'./bonk2.png'


try{
  var clickAmount=JSON.parse(document.cookie)[0].clickAmount
  var clickTimes=JSON.parse(document.cookie)[0].clickTimes
  var autoClick=JSON.parse(document.cookie)[0].autoClick
  var upgrade_status=JSON.parse(document.cookie)[0].upgrade_status
  var costList=JSON.parse(document.cookie)[0].costList
  var autoPerSec=[1,2,8,47,260,1400,7800,44000]
  var ownedUpgrade=JSON.parse(document.cookie)[0].ownedUpgrade
  var autoPerSec_Enchanted=JSON.parse(document.cookie)[0].autoPerSec_Enchanted
  var ownedEnchant=JSON.parse(document.cookie)[0].ownedEnchant
  var nextSound=["sound1","sound2","sound3","sound4","sound5","sound6","sound7","sound8","sound9","sound10","sound11"]
}
catch(e)
{
  clickAmount=0
  autoClick=0
  upgrade_status=0
  clickTimes=0
  costList=[15,100,1100,12000,130000,1400000,20000000,330000000]
  autoPerSec=[1,2,8,47,260,1400,7800,44000]
  ownedUpgrade=[0,0,0,0,0,0,0,0]
  ownedEnchant=[1,1,1,1,1,1,1,1]
  autoPerSec_Enchanted=[
    autoPerSec[0]*ownedEnchant[0],
    autoPerSec[1]*ownedEnchant[1],
    autoPerSec[2]*ownedEnchant[2],
    autoPerSec[3]*ownedEnchant[3],
    autoPerSec[4]*ownedEnchant[4],
    autoPerSec[5]*ownedEnchant[5],
    autoPerSec[6]*ownedEnchant[6]]
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
      <Left title="強化" clickTimes={clickTimes}/>
      <MyCard title="點擊區" text={clickAmount} auto={autoClick}/>
      <Upgrades title="升級" autoPerSec={autoPerSec_Enchanted} cost={costList}ownedUpgrade={ownedUpgrade}/>
      <Footer></Footer>
      </div>
    )
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);


//統計
function profile()
{
  for(var i=0;i<ownedEnchant.length;i++)
  {
    if(ownedEnchant[i]==2)
    {
      document.querySelector(".profile").childNodes[i].classList.remove("d-none")
    }
  }
  document.querySelector(".clickTimes").innerText="你手動Bonk了"+clickTimes+"次"
}
//查看是否有強化可用
function availableEnchant()
{
  for(var i=0;i<ownedUpgrade.length;i++)
  {
    if(ownedUpgrade[i]>0&&ownedEnchant[i]==1)
    {
      try{
        document.querySelector(".enchant").childNodes[i].classList.remove("d-none")
      }
      catch(e)
      {
        console.log(e)
      }
    }
  }
}

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


function getAutoclick(){
  autoClick=(autoPerSec[0]*ownedUpgrade[0]*ownedEnchant[0])+
  (autoPerSec[1]*ownedUpgrade[1]*ownedEnchant[1])+
  (autoPerSec[2]*ownedUpgrade[2]*ownedEnchant[2])+
  (autoPerSec[3]*ownedUpgrade[3]*ownedEnchant[3])+
  (autoPerSec[4]*ownedUpgrade[4]*ownedEnchant[4])+
  (autoPerSec[5]*ownedUpgrade[5]*ownedEnchant[5])
}

//強化
document.querySelector(".Upgrade0_1").addEventListener("click",function(){
  if(clickAmount>=100)
  {
    clickAmount-=100
    document.querySelector(".Upgrade0_1").classList.add("d-none")
    document.querySelector(".Upgraded0_1").classList.remove("d-none")
    ownedEnchant[0]=2
    autoPerSec_Enchanted[0]=autoPerSec[0]*ownedEnchant[0]
    getAutoclick()
    profile()
  }
})
document.querySelector(".Upgrade1_1").addEventListener("click",function(){
  if(clickAmount>=1000)
  {
    clickAmount-=1000
    document.querySelector(".Upgrade1_1").classList.add("d-none")
    document.querySelector(".Upgraded1_1").classList.remove("d-none")
    ownedEnchant[1]=2
    autoPerSec_Enchanted[1]=autoPerSec[1]*ownedEnchant[1]
    getAutoclick()
    profile()
  }
})
document.querySelector(".Upgrade2_1").addEventListener("click",function(){
  if(clickAmount>=11000)
  {
    clickAmount-=11000
    document.querySelector(".Upgrade2_1").classList.add("d-none")
    document.querySelector(".Upgraded2_1").classList.remove("d-none")
    ownedEnchant[2]=2
    autoPerSec_Enchanted[2]=autoPerSec[2]*ownedEnchant[2]
    getAutoclick()
    profile()
  }
})
document.querySelector(".Upgrade3_1").addEventListener("click",function(){
  if(clickAmount>=120000)
  {
    clickAmount-=120000
    document.querySelector(".Upgrade3_1").classList.add("d-none")
    document.querySelector(".Upgraded3_1").classList.remove("d-none")
    ownedEnchant[3]=2
    autoPerSec_Enchanted[3]=autoPerSec[3]*ownedEnchant[3]
    getAutoclick()
    profile()
  }
})
document.querySelector(".Upgrade4_1").addEventListener("click",function(){
  if(clickAmount>=1300000)
  {
    clickAmount-=1300000
    document.querySelector(".Upgrade4_1").classList.add("d-none")
    document.querySelector(".Upgraded4_1").classList.remove("d-none")
    ownedEnchant[4]=2
    autoPerSec_Enchanted[4]=autoPerSec[4]*ownedEnchant[4]
    getAutoclick()
    profile()
  }
})
document.querySelector(".Upgrade5_1").addEventListener("click",function(){
  if(clickAmount>=14000000)
  {
    clickAmount-=14000000
    document.querySelector(".Upgrade5_1").classList.add("d-none")
    document.querySelector(".Upgraded5_1").classList.remove("d-none")
    ownedEnchant[5]=2
    autoPerSec_Enchanted[5]=autoPerSec[5]*ownedEnchant[5]
    getAutoclick()
    profile()
  }
})

//Bonk動畫
document.querySelectorAll(".card")[1].lastChild.lastChild.addEventListener("mousedown",function(){
  document.querySelector(".bonk1").className='card-img bonk1 d-none'
  document.querySelector(".bonk2").className='card-img bonk2'

})
document.querySelectorAll(".card")[1].lastChild.lastChild.addEventListener("mouseup",function(){
  document.querySelector(".bonk1").className='card-img bonk1'
  document.querySelector(".bonk2").className='card-img bonk2  d-none'
  clickTimes+=1
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
  document.querySelectorAll(".card")[1].lastChild.childNodes[1].innerHTML = "你已經被bonk了"+clickAmount+"次"+",每秒自動bonk"+autoClick+"次";
  ifCanUpgrade()
})

//自動屁升級
for(let i=0;i<document.querySelectorAll(".upgradeButton").length;i++)
{
  document.querySelectorAll(".upgradeButton")[i].addEventListener("click",function(){
    ownedUpgrade[i]+=1
    getAutoclick()
    upgrade_status=checkUpgradeStatus(i+1)
    clickAmount-=costList[i]
    costList[i]=Math.ceil(costList[i]*1.15)
    document.querySelectorAll(".ownedUpgrade")[i].childNodes[1].textContent=ownedUpgrade[i]
    document.querySelectorAll(".cost")[i].innerText=numberProcess(costList[i])+'ϝ'
    document.querySelectorAll(".card")[1].lastChild.childNodes[1].innerHTML = "你已經被bonk了"+clickAmount+"次"+",每秒自動bonk"+autoClick+"次";
    ifCanUpgrade()
    availableEnchant()
    try{
      document.querySelectorAll(".upgrade_detail")[i+1].classList.remove("d-none")
    }
    catch(e)
    {
      console.log("no more!")
    }
  })
}

//大數轉換
function numberProcess(num)
{
  if(num>=1000000)
  {
    num/=1000000
    num=num.toFixed(3)
    return(num+"M")
  }
  else if(num>=10000)
  {
    num/=1000
    num=num.toFixed(3)
    return(num+"K")
  }
  else
  {
    num=parseInt(num,10)
    return(num)
  }
}

//自動屁(0.1秒一次)
var clicksPerSecond = setInterval(myAlert, 100);
function myAlert() {
  // console.log('1秒鐘到了！,每秒+'+autoClick);
  clickAmount+=(autoClick/10)
  document.querySelectorAll(".card")[1].lastChild.childNodes[1].innerHTML = "你已經被bonk了"+numberProcess(clickAmount)+"次"+",每秒自動bonk"+autoClick+"次";
  availableEnchant()
  ifCanUpgrade()
}
//存檔(每一分鐘)
var saveTimer= setInterval(save,6000)
function save(){
  var info=[{clickTimes:clickTimes,clickAmount:clickAmount,autoClick:autoClick,upgrade_status:upgrade_status,costList:costList,ownedUpgrade:ownedUpgrade,ownedEnchant:ownedEnchant,autoPerSec_Enchanted:autoPerSec_Enchanted}]
  var info_json=JSON.stringify(info)
  document.cookie=info_json+"; expires=Thu, 18 Dec 2022 12:00:00 GMT; path=/";
  console.log("saved!")
  profile()
}

ifCanUpgrade()
checkUpgrade()
availableEnchant()
profile()