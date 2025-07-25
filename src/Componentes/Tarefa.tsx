type TarefaProps = {
    id: number;
	titulo: string;
	concluida: boolean;
	onConcluir: (id: number) => void;
}

function Tarefa({ id, titulo, concluida, onConcluir }: TarefaProps) {
  return (
    <div>
      <span style={{ textDecoration: concluida ? "line-through" : "none" }}>
        {titulo}
      </span>
      {concluida === false && (
        <button onClick={() => onConcluir(id)}>Concluir</button>
      )}
    </div>
  );
}

export default Tarefa;