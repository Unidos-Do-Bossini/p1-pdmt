import React, {Component} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import TarefaEntrada from './TarefaEntrada' 
// import 'bootstrap/dist/css/bootstrap.min.css'

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <TarefaEntrada/>
          </Col>
        </Row>
      </Container>
    )
  }
}
