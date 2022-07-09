import { Fragment, useEffect, useState } from "react"

import "./style/quemsoueustyle.css"

import ConfigIMG from "./img/configurações.png"
import instagram from "./img/Instagram-.png"
import interrogação from "./img/interrogação.png"

function App(){
  {/*Use State*/}
  const [count, setCount] = useState(1)
  const [dica01, setDica01] = useState(false)
  const [dica02, setDica02] = useState(false)
  const [dica03, setDica03] = useState(false)
  const [dica04, setDica04] = useState(false)
  const [dica05, setDica05] = useState(false)
  const [dica06, setDica06] = useState(false)

  const[acerto, setAcerto] = useState(false)
  const[erro, setErro] = useState(false)

  const [valordoinput, setValordoinput] = useState("")

  const [apiget, setApiget] = useState([])
  

  /*API*/
  /*
  async function getapi(){
    try{
      const api = await fetch("https://api.b7web.com.br/cinema/")
      const json = await api.json()
      setApiget(json)
    }catch(e){
      setApiget(false)
    }
  }
  useEffect(()=>{
    getapi()
  })
  */

  const apiteste ={
    dica01:"Sou Cantor", 
    dica02:"Nasci 4 de julho de 1995, em Nova York ",
    dica03:"Sofri um acidente de avião",
    dica04:"Ganhei em uma noite 9 troféus do Billboard Music Award",
    dica05:"Minha música mais famosa atualmente é Rockstar",
    dica06:"Meu nome real é Austin Richard Post",
    nome:"Post Malone"

  }




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

  return(
  <Fragment>
    
    {dica01 === true && <div>1ª Dica: {apiteste.dica01}</div>}
    {dica02 === true && <div>2ª Dica: {apiteste.dica02}</div>}
    {dica03 === true && <div>3ª Dica: {apiteste.dica03}</div>}
    {dica04 === true && <div>4ª Dica: {apiteste.dica04}</div>}
    {dica05 === true && <div>5ª Dica: {apiteste.dica05}</div>}
    {dica06 === true && <div>6ª Dica: {apiteste.dica06}</div>}
    {acerto === true && <h1>Você Acertou a resposta era: {apiteste.nome}</h1>}
    {count < 8 && count > 1 && <input type="text" value={valordoinput} onChange={valor} required/> }
    {count < 8 && <button onClick={mudarcount}>Clique aqui para dicas</button>}
    {count < 8 && <h1>Dica: {count - 1}/6</h1>}
    {erro === true && <h1>Você Perdeu!</h1>}
  </Fragment>
  )
}

export default App