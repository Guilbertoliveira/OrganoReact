import './ButtonReact.css';

const ButtonReact = (props) => {
    return (
        <button className='Button'>{props.children}</button>  //recebe tudo que está dentro da tag react <ButtonReact> no index.js
    )
}

export default ButtonReact;