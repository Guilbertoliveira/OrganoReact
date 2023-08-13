import { Icolaborador } from '../../shared/interfaces/IColaborador';
import Card from '../Card';
import './Time.css';


interface TimeProps {
    nome: string
    corSecundaria: string
    corPrimaria: string
    colaboradores: Icolaborador[]
    aoDeletar: (id: string) => void
    aoFavoritar: (id: string) => void
    time: any
    mudarCor: any
}

export default function Time({ ...props }: TimeProps) {
    const estiliza = {
        backgroundColor: props.corSecundaria
    }

    return (
        props.colaboradores.length > 0 && <section className='time' style={estiliza} >
            <input value={props.corPrimaria} type='color' className='input-cor' onChange={(evento) => props.mudarCor(evento.target.value, props.time.id, "corPrimaria")}></input>
            <input value={props.corSecundaria} type='color' className='input-cor2' onChange={(evento) => props.mudarCor(evento.target.value, props.time.id, "corSecundaria")}></input>
            <div>
                <h3 style={{ borderColor: props.corPrimaria, color: props.corPrimaria }}>{props.nome}</h3>
                <div className='cards'>
                    {props.colaboradores.map(colaborador => {
                        return <Card
                            key={colaborador.id}
                            colaborador={colaborador}
                            corPrimaria={props.corPrimaria}
                            aoDeletar={props.aoDeletar}
                            aoFavoritar={props.aoFavoritar}
                        />
                    })}
                </div>
            </div>
        </section>
    )
}


