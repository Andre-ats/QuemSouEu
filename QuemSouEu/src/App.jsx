import { Fragment, useEffect, useState } from "react"
import axios from "axios"
import moment from "moment"
import { BeatLoader } from "react-spinners" 
import Modal from "react-modal"

import "./style/quemsoueustyle.css"
import './style/_Styles.scss'

import Menu from "./components/Menu"
import Header from './components/Header'
import Dica from "./components/Dica"

function App(){
  const [person, setPerson] = useState([])
  const [isLoading, setLoading] = useState(true)

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
  
  /*Onclick*/
  function valor(event){
    setValordoinput(event.target.value)
  }

  function checkHint({ nome }){
    if(valordoinput === nome){
      setDica01(true)
      setDica02(true)
      setDica03(true)
      setDica04(true)
      setDica05(true)
      setDica06(true)
      setAcerto(true)
    }
    else{
      console.log('penis')
    }
  }
  /*
  function mudarcount(){
    setCount(count + 1)
    console.log(person)
  }*/

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
          checkHint(person)
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

  return(
  <Fragment>
    {isLoading && <Modal className="modal-loading" ariaHideApp={false} isOpen={isLoading}><BeatLoader /></Modal>}
    <Header abrirmenu={abrirmenu}/>
    {interrogacao && <Menu />}
    <div className="container-inteiro">
      <div className="container-dentro">
        <div className="area-pergunta">
          {dica01 && <Dica person={person} num={1}/>}
          {dica02 && <Dica person={person} num={2}/>}
          {dica03 && <Dica person={person} num={3}/>}
          {dica04 && <Dica person={person} num={4}/>}
          {dica05 && <Dica person={person} num={5}/>}
          {dica06 && <Dica person={person} num={6}/>}
        </div>
        <div className="area-envio">
          {count < 8 && acerto === false && count > 1 && <input id="barra-escrita" type="text" value={valordoinput} onChange={valor} required/> }
          {count < 8 && acerto === false && <button id="button" onClick={mudarcount}><p>Clique aqui para dicas</p></button>}
          {count < 8 && acerto === false && <h1 id="dicacount">Dica: {count - 1}/6</h1>}
          {acerto && <h1>Você Acertou a resposta era: {person.nome}</h1>}
          {erro && <h1>Você Perdeu! A resposta era: {person.nome}</h1>}
        </div>
      </div>
    </div>
    
  </Fragment>
  )
}

export default App
