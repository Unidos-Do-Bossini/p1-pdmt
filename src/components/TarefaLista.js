import React from 'react';

function TarefaLista() {
  const tarefas = [
    "Preparar aula de programação",
    "Fazer feira",
    "Preparar marmitas"
  ];

  const getIcone = (texto) => {
    if (texto.toLowerCase().includes('aula')) {
      return 'pi pi-book';
    } else if (texto.toLowerCase().includes('feira')) {
      return 'pi pi-shopping-cart';
    } else if (texto.toLowerCase().includes('marmitas')) {
      return 'pi pi-box';
    } else {
      return 'pi pi-check';
    }
  };

  return (
    <div className="container mt-3 text-center">
      <h2>Tarefas</h2>
      <div className="card">
        <div className="card-body">
          {tarefas.map((tarefa, index) => (
            <div key={index} className="border p-3 mb-3">
              <div className="d-flex justify-content-between align-items-center">
                <span><i className={getIcone(tarefa)} style={{ marginRight: '0.5rem' }}></i>{tarefa}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TarefaLista;
