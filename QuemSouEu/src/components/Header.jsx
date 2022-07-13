import ConfigIMG from "../img/configurações.png"
import instagram from "../img/Instagram-.png"
import interrogação from "../img/interrogação.png"

const Header = ({ abrirmenu }) => {
    return (
        <header className="header-int">
            <div className="header-dentro">
                <img onClick={abrirmenu} src={interrogação} alt="ajuda"/>
                <a target={"blank_"} href="#"><img src={instagram} alt="Instagram Imagem"/></a>
                <h1 id="h1-header">Bastidores</h1>
                <img src={ConfigIMG} alt="Configurações Imagem"/>
            </div>
        </header>
    )
}

export default Header