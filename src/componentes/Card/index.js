import './Card.css';

const Card = ({nome, imagem, cargo, corPrimaria, dificuldade}) => {
    

    return (
      
                <div className='card'>
                    <div className='topo' style={{backgroundColor: corPrimaria}}>
                        <img src={imagem} alt={nome}></img>
                    </div>
                    <div className='rodape'>
                        <h4>{nome} </h4>
                        <h5>{cargo}</h5>
                        <h6>{dificuldade}</h6>
                    </div>
                </div>
        
    )
}


export default Card;