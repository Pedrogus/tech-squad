import "./styles.css";

export function Login () {

    return (
        <div className="container">
            <h2>Login</h2>
        <form className="formulario">
            <div className="inputContainer">
                <label htmlFor="email">Email</label>
                <input type="email" id="email"/>
            </div>
            <div className="inputContainer">
                <label htmlFor="password">Senha</label>
                <input type="password" id="password"/>
            </div>
            <button type="submit" className="button">Login</button>
        </form>
        </div>
    );
}