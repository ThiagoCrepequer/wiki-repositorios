import './styles.css'

const BlocoRepositorio = ({nome, descricao, autor, onClick, id}) => {
    return (
        <>
            <div className='container-repositorio'>
                <h3 className='nome-repo'>{nome}</h3>
                <p className='desc-repo'>{descricao}</p>
                <p className='criador'>Criador: {autor}</p>  
                <button onClick={onClick} id={id}>Aapagar</button>
            </div>
        </>    
    )
}

export { BlocoRepositorio }