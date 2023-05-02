import { useState } from 'react';
import Banner from './componentes/Banner/Banner'; //maneira importada com caminho completo
import Formulario from './componentes/Formulario';//maneira importada com index


function App() {

  const [colaboradores, setColaboradores] = useState([]);

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
    </div>
  );
}

export default App;
