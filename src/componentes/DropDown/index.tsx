import './DropDown.css';

interface DropDownprops {
    label: string
    valor: string
    aoAlterado: (valor: string) => void
    itens: string[]
}

const DropDown = (props: DropDownprops) => {

    return (
        <div className='Lista-suspensa'>
            <label>{props.label}</label>
            <select value={props.valor} onChange={evento => props.aoAlterado(evento.target.value)} >
                {props.itens.map(item => {
                    return <option key={item}> {item}</option>
                })}
            </select>
        </div>

    )

}

export default DropDown;