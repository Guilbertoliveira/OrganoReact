import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import DropDown from "../DropDown";
import ButtonReact from "../ButtonReact";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


const Formulario = (props) => {
  
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState ('');
    const [dificuldade, setDificuldade] = useState ('');


    function validaImagem(imagemvalidada){
        var img = document.createElement('img');
        img.src = imagemvalidada;
      
        img.onerror = function() {
            let colaboradorcomerro = {
                "nome": nome,
                "cargo": cargo,
                "imagem": 'https://t4.ftcdn.net/jpg/00/64/67/27/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg',
                "time": time,
                "dificuldade": dificuldade,
                "id": uuidv4()
            }
   
            props.aoColaboradorCadastrado(colaboradorcomerro);
        }
        img.onload = function() {
            let colaborador = {
                "nome": nome,
                "cargo": cargo,
                "imagem": imagem,
                "time": time,
                "dificuldade": dificuldade,
                "id": uuidv4()
            }
   
            props.aoColaboradorCadastrado(colaborador);
          }
      
      }


    const aoSalvar = (eventClick) =>{
        eventClick.preventDefault();
        
        validaImagem(imagem)

       

    //    console.log('Form foi submetido =>', nome, cargo, imagem, time);   
    
         setNome(""); 
         setImagem("");
         setCargo("");
         setTime("");
         setDificuldade("");
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
                    itens={props.Times.map((time)=> time.nome)}
                    valor={time}
                    aoAlterado={valorNovo => setTime(valorNovo)}>
                </DropDown>
                <CampoTexto //campo criado como teste para aprender :D 
                    label="Dificuldade"
                    valor={dificuldade}
                    obrigatorio={true}
                    aoAlterado= {valorNovo => setDificuldade(valorNovo)}
                    placeholder={'Dificuldade do personagem'}
                ></CampoTexto>
                
                    
                <ButtonReact>Criar Card</ButtonReact>
            </form>
        </section>
    )

}

export default Formulario