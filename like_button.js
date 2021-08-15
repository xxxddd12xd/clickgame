
function clickArea(){
  return <div>1</div>
}

function clickArea2(){
  return <div>2</div>
}

function clickArea3(){
  return <div>3</div>
}

const element1 = <clickArea />
const element2 = <clickArea2 />
const element3 = <clickArea3 />
ReactDOM.render(
  element1,
  element2,
  element3,
  document.getElementById('root')
);