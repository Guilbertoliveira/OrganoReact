import Card from '../Card';
import './Time.css';


export default function Time (props) {
    console.log(props);
    const estiliza = {
        backgroundColor: props.corSecundaria
    }

    return (
        <section className='time' style={estiliza}>
            <div>
                <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
                <Card></Card>

            </div>
        </section>
    )
}


