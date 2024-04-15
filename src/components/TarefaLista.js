import React from 'react'

function TarefaLista(props) {
  return (
    <div className="container mt-3 text-center">
      <h2>Tarefas {}</h2>
      <div className="card">
        <div className="card-body">
          {props.tarefas.map((tarefa, index) => (
            <div key={index} className="border p-3 mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <span>{tarefa}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TarefaLista
