import Banner from './componentes/Banner/Banner'; //maneira importada com caminho completo
import CampoTexto from './componentes/Formulario'; //maneira importada com index

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <CampoTexto label="Nome" placeholder="Digite seu nome"></CampoTexto>
      <CampoTexto label="Cargo" placeholder="Digite seu cargo"></CampoTexto>
      <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"></CampoTexto>

    </div>
  );
}

export default App;
