const NewHeader = ({ setOpenMenu }) => {
    return (
        <header className="cabeca">
            <h1>Bastidores</h1>
            <ul>
                <li onClick={() => setOpenMenu(true)}><h4>Instruções</h4></li>
            </ul>
        </header>
    )
}

export default NewHeader