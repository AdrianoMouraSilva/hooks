import { useState } from 'react'

function MostrarTexto() {
  // Crie um estado booleano "visivel", começando em true
 const [visivel, setVisivel] = useState(true);

//  function mudarVisive(){
//     setVisivel(!visivel);
//  }

  return (
    <div>
      <button onClick={()=>setVisivel(!visivel)}>
        Mostrar/Ocultar
      </button>

      {/* Mostre esse parágrafo só se visivel for true */}
      {visivel && <p>Você consegue me ver?</p>}
    </div>
  );
}

export default MostrarTexto;