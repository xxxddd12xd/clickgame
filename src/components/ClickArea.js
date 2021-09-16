import {Card,Button, Container,Tooltip,OverlayTrigger,Popover,Row,Col,Navbar} from 'react-bootstrap';
import React from 'react';
import Video from'./01.webm'
import Apple from'./apple.png'


function Left(props) {
  return(
    <div className={"h-100 d-inline-block"} style={{width: '33%'}}>
      <Card style={{ width: '100%' }}>
        <Card.Img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17b4e20590a%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17b4e20590a%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22105.9765625%22%20y%3D%2297.003125%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"/>
        <Row>
          <Col><img src={Apple}/></Col>
          <Col><img src={Apple}/></Col>
          <Col><img src={Apple}/></Col>
          <Col><img src={Apple}/></Col>
          <Col><img src={Apple}/></Col>
        </Row>
        <Row>
          <Col><img src={Apple}/></Col>
          <Col><img src={Apple}/></Col>
          <Col><img src={Apple}/></Col>
          <Col><img src={Apple}/></Col>
          <Col><img src={Apple}/></Col>
        </Row>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>還沒想到</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

function MyCard(props) {
  return(
    <div className={"h-100 d-inline-block"} style={{width: '33%'}}>
      <Card style={{ width: '100%' }}>
      <iframe height="265" src="https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1&controls=1&modestbranding=1&showinfo=0&enablejsapi=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe>
          <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            你已經被屁了{props.text}次,每秒自動屁你{props.auto}次
          </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}




class Upgrade_detail extends React.Component{
  render(){
    return(
    <OverlayTrigger placement="left" overlay={
      <Popover id="popover-basic">
      <Popover.Header as="h3">每秒多屁{this.props.order}次</Popover.Header>
      <Popover.Body>
        這裡會有 <strong>升級細項的文本</strong>
      </Popover.Body>
    </Popover>
    }>
      <Card className="upgrade_detail d-none"style={{ backgroundColor:'gray' }}>
        <div className="container"style={{ height: '30px' }}>
          <div className="row">
            <div  className="col-sm">每秒多屁{this.props.order}次</div>
            <div  className="col-sm cost">{this.props.detail}ϝ</div>
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
  render(){
    return(
      <div className={"h-100 d-inline-block"} style={{width: '33%'}}>
      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17b4e20590a%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17b4e20590a%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22105.9765625%22%20y%3D%2297.003125%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              一些升級資訊
            </Card.Text>
            <Container className="upgradeContainer">
              <Upgrade_detail order={this.props.autoPerSec[0]} detail={this.props.detail[0]}/>
              <Upgrade_detail order={this.props.autoPerSec[1]} detail={this.props.detail[1]}/>
              <Upgrade_detail order={this.props.autoPerSec[2]} detail={this.props.detail[2]}/>
              <Upgrade_detail order={this.props.autoPerSec[3]} detail={this.props.detail[3]}/>
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