// import { useState } from 'react'
import './App.css'
import MostrarTexto from './Componentes/MostrarTexto'
import { Pai } from './Componentes/Pai'
import Tarefa from './Componentes/Tarefa'
// import { useState } from "react";

function concluir(id: number) {
  console.log("Foi", id);

  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id === id) {
      lista[i].concluida = false;
      break; // Interrompe o loop após encontrar o item
    }
  }

  console.log(lista)

  // return console.log("Foi",id);
}

const lista = [
  { id: 1, titulo: 'tarefa 1', concluida: false },
  { id: 2, titulo: 'tarefa 2', concluida: false },
  { id: 3, titulo: 'tarefa 3', concluida: false }
];

function App() {
  //  const [status, setStatus] = useState(true)

  return (
    <>
      <MostrarTexto></ MostrarTexto>
      <Pai></ Pai>
      <div>
        <h1>Lista de Tarefas</h1>

        <ul>
          {lista.map((item) => (
            // <li key={item.id}>{item.titulo}
            <Tarefa titulo={item.titulo} concluida={item.concluida} id={item.id} onConcluir={concluir}></ Tarefa>
            // </li>
          ))}
        </ul>


      </div>
    </>
  )
}

export default App
