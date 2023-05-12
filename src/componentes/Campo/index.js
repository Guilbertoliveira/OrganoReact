import './Campo.css'; 

// com as {} conseguimos pegar a variavel e inserir o que foi passado pelo props para dentro do nosso html
const Campo = (props) => {

    // let valor = '';

    
    const campoModificado = `${props.placeholder}...`
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }



    return (
            <div className='Container-campo'>
                <label>{props.label}</label> 
                <input type={props.type} value={props.valor} 
                    onChange={aoDigitado}
                    required={props.obrigatorio} 
                    placeholder={campoModificado}
                    >
                 </input>
            </div>

 )
}


export default Campo;