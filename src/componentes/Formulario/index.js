import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import DropDown from "../DropDown";
import ButtonReact from "../ButtonReact";
import { useState } from "react";






const Formulario = () => {
  
    const times = [
        'Adc','Mid','Solo','Support','Jungle'
    ]

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');



    const aoSalvar = (eventClick) =>{
        eventClick.preventDefault();
       console.log('Form foi submetido =>', nome, cargo, imagem);
       

    }


    return (
        <section className="container">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do Smite.</h2>
                <CampoTexto
                    obrigatorio={true} 
                    label="Nick" 
                    placeholder="Digite seu nick"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    >
                    
                </CampoTexto>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}>
                </CampoTexto>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}>
                </CampoTexto>
                <DropDown 
                    label="Lane" 
                    itens={times}>
                </DropDown>
                <ButtonReact>Criar Card</ButtonReact>
            </form>
        </section>
    )
}

export default Formulario