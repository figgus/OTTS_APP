
import axios from 'axios'
import {GetUrlApi} from '../../globales/VariablesGlobales'
import swal from 'sweetalert'

export function CrearConductor(){

    const CrearConductor=async ()=>{
        alert('enviando');
        var data = {}
        data.username = document.getElementById('username').value;
        data.password = document.getElementById('password').value;
        data.primerNombre = document.getElementById('primerNombre').value;
        data.segundoNombre = document.getElementById('segundoNombre').value;
        data.apellidoPaterno = document.getElementById('apellidoPaterno').value;
        data.apellidoMaterno = document.getElementById('apellidoMaterno').value;
        const res = await axios.post(GetUrlApi()+'/api/usuarios',data).catch((err)=>{
            console.log(err);
            alert('fallo');
        });
        if(res.status===200){
            swal('exito');
        }
        else{
            swal('error');
        }
    }


    return (
        <div id="modalCrearConductor" className="modal bottom-sheet">
            <div className="modal-content">
              <h5>Informacion personal</h5>
              <div className="row">
                <div className="col s3">
                    <label for="primerNombre">Nombre</label>
                    <input placeholder="Placeholder" id="primerNombre" type="text" className="validate"/>
                </div>
                <div className="col s3">
                    <label for="segundoNombre">Segundo nombre</label>
                    <input placeholder="Placeholder" id="segundoNombre" type="text" className="validate"/>
                </div>
                <div className="col s3">
                    <label for="apellidoPaterno">Apellido paterno</label>
                    <input placeholder="Placeholder" id="apellidoPaterno" type="text" className="validate"/>
                </div>
                
                <div className="col s3">
                    <label for="apellidoMaterno">Apellido materno</label>
                    <input placeholder="Placeholder" id="apellidoMaterno" type="text" className="validate"/>
                </div>

                <h5>Informacion del usuario</h5>
                <div className="row">
                    <div className="col s6">
                        <label for="username">Nombre de usuario</label>
                        <input placeholder="Placeholder" id="username" type="text" className="validate"/>
                    </div>
                    <div className="col s6">
                        <label for="password">Password</label>
                        <input placeholder="Placeholder" id="password" type="password" className="validate"/>
                    </div>
                    

                </div>
              </div>
            </div>

            
            <div className="modal-footer">  
                <a onClick={()=>{CrearConductor()}} className="waves-effect waves-light btn-large">Listo</a>
            </div>
        </div>
        );
}


