import React from 'react';

type Valida = {
    status: boolean;
    setStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

function MostrarTexto(props: Valida) {
    // Crie um estado booleano "visivel", começando em true


    function validacao(test: boolean) {

        if (test === true) {
            setStatus(true);
        } else {
             setStatus(true);
        }
    }

    return (
        <div>
            <button onClick={() => validacao(props.status)}>
                Mostrar/Ocultar
            </button>

            {/* Mostre esse parágrafo só se visivel for true */}
            <p>Você consegue me ver?</p>
        </div>
    );
}

export default MostrarTexto;