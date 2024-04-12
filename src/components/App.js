import React, { Component } from 'react';
import '../styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import TarefaEntrada from './TarefaEntrada';
import TarefaLista from './TarefaLista';

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <TarefaEntrada />
          </Col>
        </Row>
        <Row>
          <Col>
            <TarefaLista />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
