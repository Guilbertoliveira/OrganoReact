import Card from '../Card';
import './Time.css';


export default function Time (props) {
    console.log(props.colaboradores)
    const estiliza = {
        backgroundColor: props.corSecundaria
    }

    return (
        <section className='time' style={estiliza}>
            <div>
                <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
                <div className='cards'>
                    {props.colaboradores.map(colaborador => <Card nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}></Card>)}
                </div>

            </div>
        </section>
    )
}


