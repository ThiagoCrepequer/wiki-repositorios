import './styles.css'
import { useState } from 'react'
import { BlocoRepositorio } from '../../components/BlocoRepositorio'

const Home = () => {
    const [repo, setRepo] = useState()
    const [autor, setAutor] = useState()
    const [resultados, setResultados] = useState([])

    const handleClick = async () => {
        const dataRequest = await fetch(`https://api.github.com/repos/${autor}/${repo}`)
        if(dataRequest.status === 404) return alert('Error 404: Repositório não encontrado')

        const {description, id} = await dataRequest.json()
        
        const testeRepoRepetido = resultados.find(repo => repo.id === id)
        if(testeRepoRepetido) return alert('Repositório já adicionado')
        
        setResultados(prev => [...prev, {autor, repo, description, id}])
    }

    const apagarRepo = (event) => {
        setResultados(resultados.filter(element => element.id.toString() !== event.target.id))
    }

    return (
        <div className='container'>
            <div className="container-pesquisa">
                <input type="text" placeholder="Autor" className="input" onChange={(event) => {
                    setAutor(event.target.value)
                }}/>
                <input type="text" placeholder="Repositório" className="input" onChange={(event) => {
                    setRepo(event.target.value)
                }}/>
                <button className='botao' onClick={handleClick}>Adicionar</button>
            </div>
            
            <div className='container-repositorios'>
                {resultados.map(element => {
                    return <BlocoRepositorio nome={element.repo} descricao={element.description} autor={element.autor} onClick={apagarRepo} id={element.id}/>
                })}
            </div>
        </div>
    )
}

export { Home }