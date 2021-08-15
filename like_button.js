
function clickArea(){
  return <div>1</div>
}

function clickArea2(){
  return <div>2</div>
}

function clickArea3(){
  return <div>3</div>
}

const clickArea = <clickArea />
const clickArea2 = <clickArea2 />
const clickArea3 = <clickArea3 />
ReactDOM.render(
  clickArea,
  clickArea2,
  clickArea3,
  document.getElementById('root')
);