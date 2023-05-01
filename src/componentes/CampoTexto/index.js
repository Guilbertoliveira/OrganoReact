import './CampoTexto.css'; 

// com as {} conseguimos pegar a variavel e inserir o que foi passado pelo props para dentro do nosso html
const CampoTexto = (props) => {

    // let valor = '';

    
    const campoModificado = `${props.placeholder}...`
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }



    return (
            <div className='Container-campotexto'>
                <label>{props.label}</label> 
                <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={campoModificado}></input>
            </div>

 )
}


export default CampoTexto;