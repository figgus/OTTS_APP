
export function Login() {
  return (
    <div >
        <div className="row">
            <div className="col s4"></div>
            <div className="col s4">
                <input placeholder="Nombre de usuario" id="username" type="text" className="validate"></input>
                <input placeholder="password" id="password" type="password" className="validate"></input>
                <center>
                    <a className="waves-effect waves-light btn">Entrar</a>
                </center>
                
            </div>
            <div className="col s4"></div>
        </div>
      
    </div>
  );
}

