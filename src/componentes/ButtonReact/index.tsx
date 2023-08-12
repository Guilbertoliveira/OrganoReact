import { ReactElement } from 'react';
import './ButtonReact.css';

import React from 'react'

interface ButtonProps {
    children: ReactElement | string
}

const ButtonReact = (props: ButtonProps) => {
    return (
        <button className='Button'>
            {props.children}
        </button>  //recebe tudo que está dentro da tag react <ButtonReact> no index.js
    )
}

export default ButtonReact;