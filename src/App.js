import { useState } from 'react';
import Banner from './componentes/Banner/Banner'; //maneira importada com caminho completo
import Formulario from './componentes/Formulario';//maneira importada com index
import Time from './componentes/Time';
import { v4 as uuidv4 } from 'uuid';
import chalk from 'chalk';

function App() {


  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: ' ',
      corPrimaria: '#',
      corSecundaria: '#'
    },
    {
      id: uuidv4(),
      nome: 'Adc',
      corPrimaria: '#262A56',
      corSecundaria: '#191919'
    },
    {
      id: uuidv4(),
      nome: 'Mid laner',
      corPrimaria: '#66347F',
      corSecundaria: '#191919'
    },
    {
      id: uuidv4(),
      nome: 'Solo',
      corPrimaria: '#3E54AC',
      corSecundaria: '#191919'
    },
    {
      id: uuidv4(),
      nome: 'Support',
      corPrimaria: '#EB455F',
      corSecundaria: '#191919'
    },
    {
      id: uuidv4(),
      nome: 'Jungle',
      corPrimaria: '#FB2576',
      corSecundaria: '#191919'
    }
  ])


  function validaNome(colaborador, colaboradores) {
    if (colaboradores.filter((nick) => nick.nome === colaborador.nome).length > 0) {
      return false;
    }
    else {
      return true;
    }
  }





  const [colaboradores, setColaboradores] = useState([]);
  const NovoColaborador = (colaborador) => {

    if (validaNome(colaborador, colaboradores)) {
      //testei o push e deu certo colaboradores.push(colaborador)
      console.log(chalk.green('usuario inserido'));
      setColaboradores([...colaboradores, colaborador]);
      //colaboradores.push(colaborador);
    }
    else {
      alert('usuario ja existente');
      console.log(chalk.red('O nome ja existe'))
    }


  }

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
    console.log(chalk.green('Deletado o card'));
  }

  function mudarCorDoTime(cor, id, campo) {

    setTimes(times.map(time => {
      if (time.id === id) {
        if (campo === "corPrimaria") { time.corPrimaria = cor; }
        else if (campo === "corSecundaria") { time.corSecundaria = cor };
      } return time;
    }))
  }

  function cadastrarTime(novoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4 }]);
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map((colaborador) => {
      if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador
    }))
  }


  function filtrarCard(estado) {
    setColaboradores(colaboradores.filter((element) => {
      return element.favorito === estado;
    }))
  }

  return (

    <div className="App">
      <Banner enderecoImagem='/imagens/pngegg.png' textoAlternativo=''></Banner>
      <Formulario
        cadastrarTime={cadastrarTime}
        aoColaboradorCadastrado={colaborador => NovoColaborador(colaborador)}
        Times={times}>
      </Formulario>
      <div className='containerBotao'>
        <button className='buttonFiltro' onClick={() => filtrarCard(true)}>Filtrar favoritos</button>
        <button className='buttonFiltro' onClick={() => filtrarCard(false)}>Não favoritados</button>
      </div>
      {times.map((time) => {
        return <Time
          aoFavoritar={resolverFavorito}
          mudarCor={mudarCorDoTime}
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
          time={time}
        >

        </Time>
      })}

    </div>
  );
}

export default App;
