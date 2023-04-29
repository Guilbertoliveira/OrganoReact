import './CampoTexto.css';

// com as {} conseguimos pegar a variavel e inserir o que foi passado pelo props para dentro do nosso html
const CampoTexto = (props) => {

    const campoModificado = `${props.placeholder}...`

    return (
            <div>
                <label>{props.label}</label> 
                <input placeholder={campoModificado}></input>
            </div>

 )
}


export default CampoTexto;