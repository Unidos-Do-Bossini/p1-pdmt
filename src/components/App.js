import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Hello, Tarefas</h1>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
