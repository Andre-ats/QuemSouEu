import Modal from 'react-modal';
import Dica from "./Dica";

const Menu = ({ openMenu, setOpenMenu }) => {
    return (
        <Modal id="modal" ariaHideApp={false} isOpen={openMenu} onRequestClose={() => setOpenMenu(false)}>
            <h1>Como Jogar?</h1>
            <p>Primeiramente irá ter um botão no centro inferior da página, você irá clicar nele e sua primeira dica irá aparecer.</p>
            <Dica num={1} dica={'Sou cantor'}/>
            <p>Logo em seguida irá aparecer uma caixa para você digitar, onde você conseguirá mandar a sua resposta.</p>
            <p>Junto com a caixa de resposta irá aparecer um contador de tentativas, quando esse contador passar de 6 você perdeu o desafio</p>
            <h1>Dica: 1/6</h1>
            <p>Se você acertar, irá aparecer uma mensagem de acerto com também todas as dicas e se errar, irá aparecer uma mensagem de que você errou!</p>
            <h1>Boa Sorte, contamos com você!</h1>
            <button className='modal-button' onClick={() => setOpenMenu(false)}>Okay</button>
            {/*<div className="menu-int">
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
            </div>*/}
        </Modal>
    )
}

export default Menu