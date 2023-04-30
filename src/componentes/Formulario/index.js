import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import DropDown from "../DropDown";
import ButtonReact from "../ButtonReact";

const Formulario = () => {
  
    const times = [
        'Adc','Mid','Solo','Support','Jungle'
    ]

    const aoSalvar = (eventClick) =>{
        eventClick.preventDefault();
       console.log(eventClick);
       

    }

    return (
        <section className="container">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do Smite.</h2>
                <CampoTexto obrigatorio={true} label="Nick" placeholder="Digite seu nick"></CampoTexto>
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo"></CampoTexto>
                <CampoTexto obrigatorio={true} label="Imagem" placeholder="Digite o endereço da imagem"></CampoTexto>
                <DropDown label="Lane" itens={times}></DropDown>
                <ButtonReact>Criar Card</ButtonReact>
            </form>
        </section>
    )
}

export default Formulario