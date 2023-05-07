import Card from '../Card';
import './Time.css';


export default function Time (props) {
    const estiliza = {
        backgroundColor: props.corSecundaria
    }


    return (
        props.colaboradores.length > 0 &&<section className='time' style={estiliza} >
            <div>
                <h3 style={{borderColor: props.corPrimaria, color: props.corPrimaria}}>{props.nome}</h3>
                <div className='cards'>
                    {props.colaboradores.map(colaborador => {
                    return <Card 
                        key={colaborador.nome} 
                        nome={colaborador.nome} 
                        cargo={colaborador.cargo} 
                        imagem={colaborador.imagem} 
                        corPrimaria={props.corPrimaria} 
                        dificuldade={colaborador.dificuldade} 
                        aoDeletar={props.aoDeletar}
                    >
                    </Card>})}
          

                </div>

            </div>
        </section>
    )
}


