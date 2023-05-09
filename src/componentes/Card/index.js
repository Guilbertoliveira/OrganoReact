import './Card.css';
import { HiOutlineTrash } from 'react-icons/hi';

const Card = ({nome, imagem, cargo, corPrimaria, dificuldade, aoDeletar}) => {
    

    

    return (
            
                <div className='card gradient-border'>
                    <HiOutlineTrash size={21} className='deletar' color={corPrimaria} onClick={aoDeletar}></HiOutlineTrash>
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