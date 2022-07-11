import { Fragment, useEffect, useState } from "react"
import axios from "axios"
import moment from "moment"

import "./style/quemsoueustyle.css"
import Menu from "./components/Menu"
import Header from './components/Header'

function App(){
  const [person, setPerson] = useState([])

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
      })
  }, [])
  
  /*Onclick*/
  function valor(event){
    setValordoinput(event.target.value)
  }

  function mudarcount(){
    console.log(person)
  }

  /*
  function mudarcount(){
    setCount(count + 1)
    if(count === 1){
      setDica01(true)
    }
      else if(count === 2){
        setDica02(true)
        if(valordoinput === apiteste.nome){
          setDica01(true)
          setDica02(true)
          setDica03(true)
          setDica04(true)
          setDica05(true)
          setDica06(true)
          setAcerto(true)
        }else{
          console.log("Você errou")
        }
      }else if(count === 3){
        setDica03(true)
        if(valordoinput === apiteste.nome){
          setDica01(true)
          setDica02(true)
          setDica03(true)
          setDica04(true)
          setDica05(true)
          setDica06(true)
          setAcerto(true)
        }else{
          console.log("Você errou")
        }
      }else if(count === 4){
        setDica04(true)
        if(valordoinput === apiteste.nome){
          setDica01(true)
          setDica02(true)
          setDica03(true)
          setDica04(true)
          setDica05(true)
          setDica06(true)
          setAcerto(true)
        }else{
          console.log("Você errou")
        }
      }else if(count === 5){
        setDica05(true)
        if(valordoinput === apiteste.nome){
          setDica01(true)
          setDica02(true)
          setDica03(true)
          setDica04(true)
          setDica05(true)
          setDica06(true)
          setAcerto(true)
        }else{
          console.log("Você errou")
        }
      }else if(count === 6){
        setDica06(true)
        if(valordoinput === apiteste.nome){
          setDica01(true)
          setDica02(true)
          setDica03(true)
          setDica04(true)
          setDica05(true)
          setDica06(true)
          setAcerto(true)
        }else{
          console.log("Você errou")
        }
        }else if(count === 7){
          if(valordoinput === apiteste.nome){
          setDica01(true)
          setDica02(true)
          setDica03(true)
          setDica04(true)
          setDica05(true)
          setDica06(true)
          setAcerto(true)
          }else{
            setErro(true)
          }
      }
  }
  */

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
    <Header abrirmenu={abrirmenu}/>
    {interrogacao && <Menu />}
    <div className="container-inteiro">
      <div className="container-dentro">
        <div className="area-pergunta">
          {dica01 === true && <div><p id="dica">1ª Dica: {apiteste.dica01}</p></div>}
          {dica02 === true && <div><p id="dica">2ª Dica: {apiteste.dica02}</p></div>}
          {dica03 === true && <div><p id="dica">3ª Dica: {apiteste.dica03}</p></div>}
          {dica04 === true && <div><p id="dica">4ª Dica: {apiteste.dica04}</p></div>}
          {dica05 === true && <div><p id="dica">5ª Dica: {apiteste.dica05}</p></div>}
          {dica06 === true && <div><p id="dica">6ª Dica: {apiteste.dica06}</p></div>}
        </div>
        <div className="area-envio">
          {count < 8 && acerto === false && count > 1 && <input id="barra-escrita" type="text" value={valordoinput} onChange={valor} required/> }
          {count < 8 && acerto === false && <button id="button" onClick={mudarcount}><p>Clique aqui para dicas</p></button>}
          {count < 8 && acerto === false && <h1 id="dicacount">Dica: {count - 1}/6</h1>}
          {acerto === true && <h1>Você Acertou a resposta era: {apiteste.nome}</h1>}
          {erro === true && <h1>Você Perdeu! A resposta era: {apiteste.nome}</h1>}
        </div>
      </div>
    </div>
    
  </Fragment>
  )
}

export default App
