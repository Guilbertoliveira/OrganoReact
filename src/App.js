import { useState } from 'react';
import Banner from './componentes/Banner/Banner'; //maneira importada com caminho completo
import Formulario from './componentes/Formulario';//maneira importada com index
import Time from './componentes/Time';
import times from './Times';

function App() {

  const [colaboradores] = useState([]);
  const NovoColaborador = (colaborador) => {
    
    //testei o push e deu certo colaboradores.push(colaborador)
    //setColaboradores([...colaboradores, colaborador]);
    colaboradores.push(colaborador);
    console.log(colaboradores);

  }

  return (
    <div className="App">
      <Banner></Banner>
      <Formulario aoColaboradorCadastrado={colaborador => NovoColaborador(colaborador)}></Formulario>

      {times.map((time) => {return <Time key={time.nome} nome={time.nome} corPrimaria={time.corPrimaria} corSecundaria={time.corSecundaria}></Time>})}

    </div>
  );
}

export default App;
