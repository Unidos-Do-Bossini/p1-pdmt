import React, { Component } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default class TarefaEntrada extends Component {
    constructor(props) {
      super(props);
      this.state = {
        descricao: ''
      };
    }
  
    onDescricaoAlterada = (event) => {
      this.setState({ descricao: event.target.value });
    };
  
    onFormSubmit = (event) => {
      event.preventDefault();
      console.log(this.state.descricao);
      this.setState({ descricao: '' });
    };

    render() {
        return (
            <div className="d-flex flex-column">
                <span className="p-input-icon-left w-full">
                    <i className="pi pi-pencil" />
                    <InputText
                        className="w-100 p-inputtext-lg"
                        placeholder="Digite a descrição"
                        style={{textAlign: 'center', borderRadius: 8}}
                        value={this.state.descricao}
                        onChange={this.onDescricaoAlterada}
                    />
                </span>
                <Button
                    label="OK"
                    className="mt-2"
                    style={{borderRadius: 8}}
                    onClick={this.onFormSubmit}
                />
            </div>
        )
    }
}


