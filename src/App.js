import { useState } from 'react';
import Banner from './componentes/Banner/Banner'; //maneira importada com caminho completo
import Formulario from './componentes/Formulario';//maneira importada com index
import Time from './componentes/Time';
import times from './Times';

function App() {


  function validaNome(colaborador, colaboradores){
      if(colaboradores.filter((nick) => nick.nome === colaborador.nome).length > 0){
        return false;
      }
      else {
        return true;
      }
  }





  const [colaboradores, setColaboradores] = useState([]);
  const NovoColaborador = (colaborador) => {
    if (validaNome(colaborador, colaboradores)){
       //testei o push e deu certo colaboradores.push(colaborador)
      setColaboradores([...colaboradores, colaborador]);
      //colaboradores.push(colaborador);
    }
    else {
      alert('usuario ja existente');
    }
   

  }

  function deletarColaborador (){
    console.log('deletando colab');
  }

  return (

    <div className="App">
      <Banner></Banner>
      <Formulario aoColaboradorCadastrado={colaborador => NovoColaborador(colaborador)}></Formulario>

      {times.map((time) => {return <Time 
            key={time.nome} 
            nome={time.nome} 
            corPrimaria={time.corPrimaria} 
            corSecundaria={time.corSecundaria}
            colaboradores={colaboradores.filter( colaborador => colaborador.time === time.nome)}
            aoDeletar={deletarColaborador}>
            
        </Time>})}

    </div>
  );
}

export default App;
