import "./Formulario.css";
import Campo from "../Campo";
import DropDown from "../DropDown";
import ButtonReact from "../ButtonReact";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Icolaborador } from "../../shared/interfaces/IColaborador";
import { useEffect } from 'react'


interface FormularioProps {
    aoColaboradorCadastrado: (obj: Icolaborador) => void
    cadastrarTime: ({ }: Time) => void
    Times: Time[]
}

type Time = {
    id?: string;
    nome: string;
    corPrimaria: string;
    corSecundaria: string;
};

const Formulario = (props: FormularioProps) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [dificuldade, setDificuldade] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');
    const [data, setData] = useState('');


    function validaImagem(imagemvalidada: string) {
        var img = document.createElement('img');
        img.src = imagemvalidada;

        img.onerror = function () {
            let colaboradorcomerro = {
                "nome": nome,
                "cargo": cargo,
                "imagem": 'https://t4.ftcdn.net/jpg/00/64/67/27/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg',
                "time": time,
                "dificuldade": dificuldade,
                "id": uuidv4(),
                "favorito": false,
                "data": data
            }

            props.aoColaboradorCadastrado(colaboradorcomerro);
            console.log(colaboradorcomerro)
        }
        img.onload = function () {
            let colaborador = {
                "nome": nome,
                "cargo": cargo,
                "imagem": imagem,
                "time": time,
                "dificuldade": dificuldade,
                "id": uuidv4(),
                "favorito": false,
                "data": data
            }

            props.aoColaboradorCadastrado(colaborador);
        }

    }


    const aoSalvar = (eventClick: React.FormEvent<HTMLFormElement>) => {
        eventClick.preventDefault();
        validaImagem(imagem)
        //    console.log('Form foi submetido =>', nome, cargo, imagem, time);   
        setNome("");
        setImagem("");
        setCargo("");
        setTime("");
        setDificuldade("");
        setData("")
    }

    useEffect(() => {
        const currentDate = new Date();
        const diaAnterior = new Date(currentDate);
        diaAnterior.setDate(currentDate.getDate() - 1);
        const formattedDate = diaAnterior.toISOString().split('T')[0];
        setData(formattedDate);
    }, []);

    return (
        <section className="container">
            <form onSubmit={aoSalvar} className="firstForm">
                <h2>Preencha os dados para criar o card do Smite.</h2>
                <Campo
                    obrigatorio={true}
                    label="Nick"
                    placeholder="Digite seu nick"
                    valor={nome}
                    aoAlterado={valorNovo => setNome(valorNovo)}
                    type='text'
                />

                <Campo
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valorNovo => setCargo(valorNovo)}
                    type='text'
                />

                <Campo
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valorNovo => setImagem(valorNovo)}
                    type='text'
                />

                <DropDown
                    label="Lane"
                    itens={props.Times.map((time) => time.nome)}
                    valor={time}
                    aoAlterado={valorNovo => setTime(valorNovo)} />

                <Campo //campo criado como teste para aprender :D 
                    label="Dificuldade"
                    valor={dificuldade}
                    obrigatorio={true}
                    aoAlterado={valorNovo => setDificuldade(valorNovo)}
                    placeholder={'Dificuldade do personagem'}
                    type='text'
                />
                <Campo
                    label="Data entrada no time"
                    valor={data}
                    obrigatorio={true}
                    aoAlterado={valorNovo => setData(valorNovo)}
                    placeholder={''}
                    type='date' />


                <ButtonReact>Criar Card</ButtonReact>
            </form>
            <form className="secondForm" onSubmit={(evento) => {
                evento.preventDefault();
                props.cadastrarTime({ nome: nomeTime, corPrimaria: corTime, corSecundaria: corTime });
                setCorTime("")
                setNomeTime("")

            }}>
                <h2>Preencha os dados para criar novo time.</h2>
                <Campo
                    obrigatorio
                    label="Nick"
                    placeholder="Digite nome do time"
                    valor={nomeTime}
                    aoAlterado={valorNovo => setNomeTime(valorNovo)}
                    type='text'
                />

                <Campo
                    obrigatorio
                    type='color'
                    label="Cor"
                    placeholder="Digite a cor do time"
                    valor={corTime}
                    aoAlterado={valorNovo => setCorTime(valorNovo)}
                />

                <ButtonReact>Criar novo time</ButtonReact>
            </form>
        </section>
    )

}

export default Formulario