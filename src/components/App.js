import React, { Component } from 'react'
import '../styles.css'
import { Container, Row, Col } from 'react-bootstrap'
import TarefaEntrada from './TarefaEntrada'
import TarefaLista from './TarefaLista'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tarefas: []
    }
  }

  adicionarTarefa = descricao => {
    this.setState(prevState => ({
      tarefas: [...prevState.tarefas, descricao]
    }))
    console.log(this.state.tarefas)
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <TarefaEntrada onTarefaAdicionada={this.adicionarTarefa} />
          </Col>
        </Row>
        <Row>
          <Col>
            <TarefaLista tarefas={this.state.tarefas} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
