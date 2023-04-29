import "./Formulario.css";
import CampoTexto from "../CampoTexto";


const Formulario = () => {
  
    return (
        <section className="container">
            <form>
                <h2>Preencha os dados para criar o card do Smite.</h2>
                <CampoTexto label="Nick" placeholder="Digite seu nick"></CampoTexto>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo"></CampoTexto>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem"></CampoTexto>
            </form>
        </section>
    )
}

export default Formulario