function Form() {
    function cadastraUsuario(e) {
        e.preventDefault()
        console.log("usuario cadastrado")
    }

    return (
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastraUsuario}>
                <div>
                    <input type="text" placeholder="Digite seu nome"/>
                </div>
                <div>
                    <input type="submit" value="cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form