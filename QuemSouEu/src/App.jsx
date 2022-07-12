import { Fragment, useEffect, useState } from "react"
import axios from "axios"
import moment from "moment"
import { BeatLoader } from "react-spinners" 
import Modal from "react-modal"
import Blur from "react-blur"

import "./style/quemsoueustyle.css"
import './style/_Styles.scss'

import Menu from "./components/Menu"
import Header from './components/Header'
import Dica from "./components/Dica"

function App(){
  const [person, setPerson] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [hint, setHint] = useState('')
  const [userInput, setUserInput] = useState('') 
  const [blur, setBlur] = useState(30)

  {/*Use State*/}
  /*Contador*/ 
  const [count, setCount] = useState(1)
  /*Dicas*/
  const [dica01, setDica01] = useState(false)
  const [dica02, setDica02] = useState(false)
  const [dica03, setDica03] = useState(false)
  const [dica04, setDica04] = useState(false)
  const [dica05, setDica05] = useState(false)
  const [dica06, setDica06] = useState(false)
  /*Mensagem de acerto ou erro*/
  const[acerto, setAcerto] = useState(false)
  const[erro, setErro] = useState(false)
  /*Pegando valor dor input*/
  const [valordoinput, setValordoinput] = useState("")
  /*const [apiget, setApiget] = useState([])*/
  /*Função cabeçalho*/
  const[interrogacao, setInterrogacao] = useState(false)  

  // API CONECTION

  // const today = moment().format('D')
  const today = '1'

  const baseURL = `https://api-guess.herokuapp.com/${today}&c7d286ca0d231096106200dee0bafacd`

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        setPerson(res.data)
        setLoading(false)
      })
  }, [])

  function checkHint({ nome }){
    if(userInput.toLowerCase() === nome.toLowerCase()){
      setDica01(true)
      setDica02(true)
      setDica03(true)
      setDica04(true)
      setDica05(true)
      setDica06(true)
      setAcerto(true)
      setCount(7)
      setBlur(0)
    }
  }

  function mudarcount(){
    setCount(count + 1)
    if(count === 1){
      setDica01(true)
    }
    else if(count === 2){
      setDica02(true)
      checkHint(person)
    }else if(count === 3){
      setDica03(true)
      checkHint(person)
    }else if(count === 4){
      setDica04(true)
      checkHint(person)
    }else if(count === 5){
      setDica05(true)
      checkHint(person)
    }else if(count === 6){
      setDica06(true)
      checkHint(person)
    }else if(count === 7){
      setErro(true)
      setBlur(0)
    }
  }
  

  function abrirmenu(){
    if(interrogacao === false){
      setInterrogacao(true)
    }
    else{
      setInterrogacao(false)
    }
  }

  function handleFormSubmit(e){
    e.preventDefault()
    if(!e.target.valor.value || e.target.valor.value.length < 4){
      return
    }

    setHint(e.target.valor.value)
    mudarcount()
    setUserInput('')
  }

  function handleCloseModal(){
    if(acerto){
      return setAcerto(false)
    }
    return setErro(false)
  }

  return(
  <Fragment>
    {acerto && <Modal onRequestClose={handleCloseModal} isOpen={acerto}><h1>Você acertou!</h1><h3>Volte amanhã para mais!</h3></Modal>}
    {erro && <Modal onRequestClose={handleCloseModal} isOpen={erro}><h1>Perdeu!</h1><h2>A resposta era: {person.nome}</h2><h3>Volte amanhã para mais!</h3></Modal>}
    {isLoading && <Modal className="modal-loading" ariaHideApp={false} isOpen={isLoading}><BeatLoader /></Modal>}
    <Header abrirmenu={abrirmenu}/>
    {interrogacao && <Menu />}
    <div className="container-inteiro">
      <div className="container-dentro">
        <div className="area-pergunta">
          {dica01 && <div className="image"><Blur className='person-foto' blurRadius={blur} img={person.foto} enableStyles shouldResize/></div>}
          <div className="area-envio">
          { dica01 ?
          <>
          <form onSubmit={handleFormSubmit}>
            <input name='valor'id="barra-escrita" type="text" value={userInput} onChange={(e) => setUserInput(e.target.value)} required/>
          </form>
          <button id="button" onClick={mudarcount} disabled={userInput.length < 4}><p>Clique aqui para dicas</p></button>
          </>
          : <button id="button"onClick={mudarcount}>Começar!</button>
          }
          {count < 8 && acerto === false && <h1 id="dicacount">Dica: {count - 1}/6</h1>}
        </div>
          {dica01 && <Dica dica={person.dica01} num={1}/>}
          {dica02 && <Dica dica={person.dica02} num={2}/>}
          {dica03 && <Dica dica={person.dica03} num={3}/>}
          {dica04 && <Dica dica={person.dica04} num={4}/>}
          {dica05 && <Dica dica={person.dica05} num={5}/>}
          {dica06 && <Dica dica={person.dica06} num={6}/>}
        </div>
      </div>
    </div>
    
  </Fragment>
  )
}

export default App
