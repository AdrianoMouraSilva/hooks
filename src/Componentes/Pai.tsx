import { useState } from "react";

function Pai() {
  const [mensagem, setMensagem] = useState("");
  function mudarMensagem(msg: string) {
    setMensagem(msg);
  }

  return (
    < div >

      <Filho texto={mensagem} mudarMensagem={mudarMensagem} />
      <button onClick={() => setMensagem("Sou pai!!!")}>
        Adicionar mensagem pelo componente Pai
      </button>
    </div >
  );
}

type FilhoProps = {
  texto: string;
  mudarMensagem: (mudarMensagem: string) => void
  // texto: string;
}

function Filho(props: FilhoProps) {
  return (
    <div>
      <p>{props.texto}</p>
      {/*Alterar mensagem do componente pai, pelo componente Filho*/}
      <button onClick={() => props.mudarMensagem("Sou filha!!!")}>
        Atualizar mensagem pelo componente Filho
      </button>
    </div>
  );
}

export {
  Pai,
  Filho
}