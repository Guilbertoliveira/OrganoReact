import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import DropDown from "../DropDown";
import ButtonReact from "../ButtonReact";
import { useState } from "react";






const Formulario = (props) => {
  
    const times = [
        'Adc','Mid','Solo','Support','Jungle'
    ]

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState ('');
    const [qualidade, setQualidade] = useState ('');




    const aoSalvar = (eventClick) =>{
        eventClick.preventDefault();
    
          let colaborador = {
             "nome": nome,
            "cargo": cargo,
             "imagem": imagem,
             "time": time,
             "qualidade": qualidade
         }
         props.aoColaboradorCadastrado(colaborador);
    //    console.log('Form foi submetido =>', nome, cargo, imagem, time);

       

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
                    aoAlterado={valorNovo => setNome(valorNovo)}
                    >      
                </CampoTexto>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valorNovo => setCargo(valorNovo)}>
                </CampoTexto>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valorNovo => setImagem(valorNovo)}>
                </CampoTexto>
                <DropDown 
                    label="Lane" 
                    itens={times}
                    valor={time}
                    aoAlterado={valorNovo => setTime(valorNovo)}>
                </DropDown>
                <CampoTexto //campo criado como teste para aprender :D 
                    label="Qualidade"
                    valor={qualidade}
                    obrigatorio={true}
                    aoAlterado= {valorNovo => setQualidade(valorNovo)}
                    placeholder={'Nível do personagem'}
                ></CampoTexto>
                
                    
                <ButtonReact>Criar Card</ButtonReact>
            </form>
        </section>
    )

}

export default Formulario