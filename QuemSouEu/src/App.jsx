import { Fragment, useEffect, useState } from "react"

import "./style/quemsoueustyle.css"

import ConfigIMG from "./img/configurações.png"
import instagram from "./img/Instagram-.png"
import interrogação from "./img/interrogação.png"
import Dica from "./img/dica.jpg"
import barraContador from "./img/barra-contador.jpg"

function App(){
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

  async function getapi(){
    try{
      const api = await fetch(`https://api-guess.herokuapp.com/1&${process.env.API_KEY}`)
      const json = await api.json()
      setApiget(json)
    }catch(e){
      setApiget(false)
    }
  }
  useEffect(()=>{
    getapi()
  })
 
  /*Onclick*/
  function valor(event){
    setValordoinput(event.target.value)
  }

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
    <header className="header-int">
      <div className="header-dentro">
        <img onClick={abrirmenu} src={interrogação} alt="ajuda"/>
        <a target={"blank_"} href="#"><img src={instagram} alt="Instagram Imagem"/></a>
        <h1 id="h1-header">Quem Sou Eu?</h1>
        <img src={ConfigIMG} alt="Configurações Imagem"/>
      </div>
    </header>
      {interrogacao === true && 
      <div className="menu-int">
        <div className="menu-dentro">
          <h1>Como Jogar?</h1>
          <p>Primeiramente irá ter um botão no centro inferior da página, você irá clicar nele e sua primeira dica irá aparecer.</p>  
          <div className="dica-foto">
            <img src={Dica} alt="Imagem Demonstração dica"/>
          </div>
          <p>Logo em seguida irá aparecer uma caixa para você digitar, onde você conseguirá mandar a sua resposta.</p>
          <p>Junto com a caixa de resposta irá aparecer um contador de tentativas, quando esse contador passar de 6 você perdeu o desafio</p>
          <div className="imagem-contador">
            <img src={barraContador} alt="Imagem Demonstração caixinha e contador"/>
          </div>
          <p>Se você acertar, irá aparecer uma mensagem de acerto com também todas as dicas e se errar, irá aparecer uma mensagem de que você errou!</p>
          <h1>Boa Sorte, contamos com você</h1>
        </div>  
      </div>
      }
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
