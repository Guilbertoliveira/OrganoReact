import './Formulario.css';

function Formulario () {
    return (
        <form>
            <h2>Preencha os dados para criar o card do colaborador.</h2>
            <div>
                <label>Nome</label>
                <input placeholder='Digite seu nome'></input>
            </div>
            <div>
                <label>Cargo</label>
                <input placeholder='Digite seu cargo'></input>
            </div>
            <div>
                <label>Imagem</label>
                <input placeholder='Informe o endereço da imagem'></input>
            </div>
            <div>
                <label>Time</label>
                <select></select>
            </div>
            <button>Criar card</button>
        </form>

)}
export default Formulario;