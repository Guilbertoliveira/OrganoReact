import './Card.css';
import { HiOutlineTrash } from 'react-icons/hi';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Icolaborador } from '../../shared/interfaces/IColaborador';


interface ColaboradorProps {
    colaborador: Icolaborador
    corPrimaria: string
    aoDeletar: (id: string) => void
    aoFavoritar: (id: string) => void
}

const Card = ({ colaborador, corPrimaria, aoDeletar, aoFavoritar }: ColaboradorProps) => {


    return (

        <div className='card gradient-border'>
            <HiOutlineTrash
                size={21}
                className='deletar'
                color={corPrimaria}
                onClick={() => aoDeletar(colaborador.id)}>
            </HiOutlineTrash>
            <div className='topo' style={{ backgroundColor: corPrimaria }}>
                <img src={colaborador.imagem} alt={colaborador.nome}></img>
            </div>
            <div className='rodape'>
                <h4>{colaborador.nome} </h4>
                <h5>{colaborador.cargo}</h5>
                <h6>{colaborador.dificuldade}</h6>
                <div className='favoritar'>
                    {colaborador.favorito
                        ? <AiFillStar style={{ fontSize: 26, color: 'yellow' }} onClick={() => aoFavoritar(colaborador.id)}></AiFillStar>
                        : <AiOutlineStar style={{ fontSize: 26, color: 'yellow' }} onClick={() => aoFavoritar(colaborador.id)}></AiOutlineStar>}
                </div>
                <h6>{new Date((colaborador.data)).toLocaleDateString()}</h6>
            </div>
        </div>

    )
}


export default Card;