import {Card,Button} from 'react-bootstrap'


function Left(props) {
  return(
    <div className={"h-100 d-inline-block"} style={{width: '33%'}}>
      <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17b4e20590a%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17b4e20590a%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22105.9765625%22%20y%3D%2297.003125%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
          <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            還沒想到
        </Card.Text>
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
        <Card.Img variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17b4e20590a%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17b4e20590a%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22105.9765625%22%20y%3D%2297.003125%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
          <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            你已經屁了{props.text}次,每秒自動屁{props.auto}次
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>

  )
  }

  function Upgrades(props) {
    return(
      <div className={"h-100 d-inline-block"} style={{width: '33%'}}>
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17b4e20590a%20text%20%7B%20fill%3A%23999%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17b4e20590a%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23373940%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22105.9765625%22%20y%3D%2297.003125%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>
                一些升級資訊
              </Card.Text>
              <Card style={{ backgroundColor:'gray' }}>
                <div className="container"style={{ height: '30px' }}>
                  <div className="row">
                    <div  className="col-sm">每秒多屁一次</div>
                      <div  className="col-sm-2">
                      <Button type="button"className="col p-1 btn-sm "variant="primary">Buy</Button>
                    </div>
                  </div>
                </div>

              </Card>
            </Card.Body>
        </Card>
      </div>
  
    )
    }

export {Left,MyCard,Upgrades}