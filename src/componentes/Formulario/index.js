import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import DropDown from "../DropDown";
import ButtonReact from "../ButtonReact";

const Formulario = () => {
  
    const times = [
        'Adc','Mid','Solo','Support','Jungle'
    ]

    return (
        <section className="container">
            <form>
                <h2>Preencha os dados para criar o card do Smite.</h2>
                <CampoTexto label="Nick" placeholder="Digite seu nick"></CampoTexto>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo"></CampoTexto>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"></CampoTexto>
                <DropDown label="Lane" itens={times}></DropDown>
                <ButtonReact texto="Criar Card"></ButtonReact>
            </form>
        </section>
    )
}

export default Formulario