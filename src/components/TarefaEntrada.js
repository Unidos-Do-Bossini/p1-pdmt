import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext'
import Button from 'react-bootstrap/Button'

export default class TarefaEntrada extends Component {
  constructor(props) {
    super(props)
    this.state = {
      descricao: ''
    }
  }

  onDescricaoAlterada = event => {
    this.setState({ descricao: event.target.value })
  }

  onFormSubmit = event => {
    event.preventDefault()
    this.props.onTarefaAdicionada(this.state.descricao)
    this.setState({ descricao: '' })
  }

  render() {
    return (
      <div className="d-flex flex-column align-items-center">
        <h2> </h2>
        <form onSubmit={this.onFormSubmit} className="w-100">
          <span className="p-input-icon-left w-100">
            <i className="pi pi-pencil"></i>
            <InputText
              value={this.state.descricao}
              onChange={this.onDescricaoAlterada}
              placeholder="Digite a descrição da tarefa"
              className="w-100 p-inputtext-lg text-center"
            />
          </span>
        </form>
        <div className="w-100 mt-2">
          <Button
            variant="primary"
            size="lg"
            onClick={this.onFormSubmit}
            className="w-100"
          >
            OK
          </Button>
        </div>
      </div>
    )
  }
}
