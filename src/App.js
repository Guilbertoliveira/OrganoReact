import { useState } from 'react';
import Banner from './componentes/Banner/Banner'; //maneira importada com caminho completo
import Formulario from './componentes/Formulario';//maneira importada com index
import Time from './componentes/Time';

function App() {


  const [times, setTimes] = useState ([
    {
      nome: ' ',
      corPrimaria: '#',
      corSecundaria: '#'
    },
    {
      nome: 'Adc',
      corPrimaria: '#262A56',
      corSecundaria: '#191919'
    },
    {
      nome: 'Mid laner',
      corPrimaria: '#66347F',
      corSecundaria: '#191919'
    },
    {
      nome: 'Solo',
      corPrimaria: '#3E54AC',
      corSecundaria: '#191919'
    },
    {
      nome: 'Support',
      corPrimaria: '#EB455F',
      corSecundaria: '#191919'
    },
    {
      nome: 'Jungle',
      corPrimaria: '#FB2576',
      corSecundaria: '#191919'
    }
])


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

  function mudarCorDoTime(cor, nome, teste){
    console.log(teste);
    setTimes(times.map(time => {
      if(time.nome === nome){
        time.corPrimaria = cor;
      } return time;
    }))
  }

  return (

    <div className="App">
      <Banner></Banner>
      <Formulario aoColaboradorCadastrado={colaborador => NovoColaborador(colaborador)} Times={times}></Formulario>

      {times.map((time) => {return <Time 
            mudarCor={mudarCorDoTime}
            key={time.nome} 
            nome={time.nome} 
            corPrimaria={time.corPrimaria} 
            corSecundaria={time.corSecundaria}
            colaboradores={colaboradores.filter( colaborador => colaborador.time === time.nome)}
            aoDeletar={deletarColaborador}
            time = {time}>
            
        </Time>})}

    </div>
  );
}

export default App;
