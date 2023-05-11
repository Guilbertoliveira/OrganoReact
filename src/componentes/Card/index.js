import { createElement, useState } from 'react';
import './Card.css';
import { HiOutlineTrash } from 'react-icons/hi';

const Card = ({nome, imagem, cargo, corPrimaria, dificuldade, aoDeletar, id, mudancaImagem}) => {
     
    let imagemDefault = 'https://t4.ftcdn.net/jpg/00/64/67/27/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg'
    

   

    return (
            
                <div className='card gradient-border'>
                    <HiOutlineTrash 
                        size={21} 
                        className='deletar' 
                        color={corPrimaria} 
                        onClick={() => aoDeletar(id)}>
                    </HiOutlineTrash>
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