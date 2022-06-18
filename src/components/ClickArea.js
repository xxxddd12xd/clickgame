import {Card,Button,Tab,Tabs,Container,Tooltip,OverlayTrigger,Popover,Row,Col,Navbar} from 'react-bootstrap';
import React,{ useState } from 'react';
import Apple from'./apple.png'
import Shop  from'./shop.png'
import ItemShop from'./ItemShop.png';
import Upgrade_detail_context from'./Upgrade_detail_context.json';
import Upgrade0 from'./Upgrade0.png'
import Upgrade0_1 from'./Upgrade0_1.png'
import Upgrade1 from'./Upgrade1.png'
import Upgrade1_1 from'./Upgrade1_1.png'
import Upgrade2 from'./Upgrade2.png'
import Upgrade2_1 from'./Upgrade2_1.png'
import Upgrade3 from'./Upgrade3.png'
import Upgrade3_1 from'./Upgrade3_1.png'
import Upgrade4 from'./Upgrade4.png'
import Upgrade4_1 from'./Upgrade4_1.png'
import Upgrade5 from'./Upgrade5.png'
import Upgrade6 from'./Upgrade6.png'
import Upgrade7 from'./Upgrade7.png'
import Bonk1 from'./bonk1.png'
import Bonk2 from'./bonk2.png'

function Enchant(props){
  return(
    <OverlayTrigger placement="right" overlay={
      <Popover id="popover-enchant">
      <Popover.Header as="h3">{props.title}</Popover.Header>
      <Popover.Body>
        {props.text}
      </Popover.Body>
    </Popover>
    }>
    <img className={props.className} src={props.id}/>
    </OverlayTrigger>
  )
}


function Left(props) {
  const [key, setKey] = useState('home');
  return(
    <div className={"h-100 d-inline-block"} style={{width: '33%'}}>
      <Card style={{ width: '100%',backgroundColor:'rgb(18,53,79)'}}>
        <Card.Img src={ItemShop}/>
        <Card.Body>
        <Tabs 
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab className="text-light"eventKey="home" title={props.title}>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>人人有功練</Card.Text>
            <Row>
              <Col>
              <Enchant id={Upgrade0_1} className={"Upgrade0_1 d-none"} title={"更強路人"}text={"路人屁你的效率翻倍"}/>
              <Enchant id={Upgrade1_1} className={"Upgrade1_1 d-none"} title={"更強酸民"}text={"網路酸民屁你的效率翻倍"}/>
              <Enchant id={Upgrade2_1} className={"Upgrade2_1 d-none"} title={"更強8+9"}text={"8+9屁你的效率翻倍"}/>
              <Enchant id={Upgrade3_1} className={"Upgrade3_1 d-none"} title={"更強你朋友"}text={"你朋友屁你的效率翻倍"}/>
              </Col>
            </Row>
          </Tab>
          <Tab className="text-light"eventKey="profile" title="統計">
          <Card.Title>統計</Card.Title>
          <Card.Text>哈佛大學</Card.Text>
          </Tab>
        </Tabs>

        </Card.Body>
      </Card>
    </div>
  )
}

class  MyCard extends React.Component{
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      
    });
  }
  render(){
    return(
      <div className={"h-100 d-inline-block text-light"} style={{width: '33%'}}>
        <Card style={{ width: '100%' ,backgroundColor:'rgb(18,53,79)'}}>
            <Card.Img className={"bonk1"}src={Bonk1}/>
            <Card.Img className={"bonk2 d-none"}src={Bonk2}/>
            <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              你已經被屁了{this.props.text}次,每秒自動屁你{this.props.auto}次
            </Card.Text>
          <Button variant="primary">屁一下</Button>
          </Card.Body>
        </Card>
      </div>
    )
  }
}




class Upgrade_detail extends React.Component{
  render(){
    return(
    <OverlayTrigger placement="left" overlay={
      <Popover id="popover-basic">
      <Popover.Header as="h3">每個每秒屁{this.props.order}次</Popover.Header>
      <Popover.Body>
      {this.props.test.text}
      </Popover.Body>
    </Popover>
    }>
      <Card className="upgrade_detail d-none"style={{ backgroundColor:'gray' }}>
        <div className="container"style={{ height: '30px' }}>
          <div className="row">
            <div  className="col-sm ownedUpgrade"><img src={this.props.img} style={{ height: '32px', width: '32px' }}></img>{this.props.ownedUpgrade}</div>
            <div  className="col-sm">{this.props.test.name}</div>
            <div  className="col-sm cost">{this.props.cost}ϝ</div>
            <div  className="col-sm-2">
              <Button type="button"className="col p-1 btn-sm upgradeButton"variant="primary">Buy</Button>
            </div>
          </div>
        </div>
      </Card>
    </OverlayTrigger>

    )
  }
}


class Upgrades extends React.Component{
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      
    });
  }

  render(){
    return(
      <div className={"h-100 d-inline-block text-light"} style={{width: '33%'}}>
      <Card style={{ width: '100%' ,backgroundColor:'rgb(18,53,79)'}}>
        <Card.Img variant="top" src={Shop}/>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text className="text-light">
              自己屁自己不夠，需要打手?
            </Card.Text>
            <Container className="upgradeContainer">
              <Upgrade_detail img={Upgrade0}test={Upgrade_detail_context[0]}order={this.props.autoPerSec[0]} cost={this.props.cost[0]}ownedUpgrade={this.props.ownedUpgrade[0]}/>
              <Upgrade_detail img={Upgrade1}test={Upgrade_detail_context[1]}order={this.props.autoPerSec[1]} cost={this.props.cost[1]}ownedUpgrade={this.props.ownedUpgrade[1]}/>
              <Upgrade_detail img={Upgrade2}test={Upgrade_detail_context[2]}order={this.props.autoPerSec[2]} cost={this.props.cost[2]}ownedUpgrade={this.props.ownedUpgrade[2]}/>
              <Upgrade_detail img={Upgrade3}test={Upgrade_detail_context[3]}order={this.props.autoPerSec[3]} cost={this.props.cost[3]}ownedUpgrade={this.props.ownedUpgrade[3]}/>
              <Upgrade_detail img={Upgrade4}test={Upgrade_detail_context[4]}order={this.props.autoPerSec[4]} cost={this.props.cost[4]}ownedUpgrade={this.props.ownedUpgrade[4]}/>
              <Upgrade_detail img={Upgrade5}test={Upgrade_detail_context[5]}order={this.props.autoPerSec[5]} cost={this.props.cost[5]}ownedUpgrade={this.props.ownedUpgrade[5]}/>
              <Upgrade_detail img={Upgrade6}test={Upgrade_detail_context[6]}order={this.props.autoPerSec[6]} cost={this.props.cost[6]}ownedUpgrade={this.props.ownedUpgrade[6]}/>
            </Container>
          </Card.Body>
      </Card>
    </div>      
    )
  }
}

class Footer extends React.Component{
  render(){
    return(
      <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
        React Bootstrap
        </Navbar.Brand>
      </Container>
      </Navbar>
    )
  }
}


export {Left,MyCard,Upgrades,Footer}