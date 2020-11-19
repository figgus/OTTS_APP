import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'; 
import { Redirect } from 'react-router'
import axios from 'axios'
import swal from 'sweetalert'
import {GetUrlApi} from '../../globales/VariablesGlobales'

export function EditarConductor(){
    const usuarioClickeado = useSelector((state) => state.usuarioClickeado);
    const M = window.M;
    

    useEffect(()=>{
        
    },[])

    

    const ClickEditar = async()=>{
        var data = {}
        data.username = document.getElementById('usernameE').value;
        data.password = document.getElementById('passwordE').value;
        data.infoPersonal = {
            primerNombre : document.getElementById('primerNombreE').value,
            segundoNombre : document.getElementById('segundoNombreE').value,
            apellidoPaterno : document.getElementById('apellidoPaternoE').value,
            apellidoMaterno : document.getElementById('apellidoMaternoE').value
        }
        debugger
        const id = usuarioClickeado._id;
        const res = await axios.put(GetUrlApi()+'/api/usuarios/'+id,data).catch((err)=>{
            console.log(err);
            alert('fallo');
        });
        if(res.status===200){
            swal('exito');
            CerrarModal();
        }
        else{
            swal('error');
        }
    }

    const CerrarModal = () => {
        document.getElementById('usernameE').value = '';
        document.getElementById('passwordE').value = '';
        document.getElementById('primerNombreE').value = '';
        document.getElementById('segundoNombreE').value = '';
        document.getElementById('apellidoPaternoE').value = '';
        document.getElementById('apellidoMaternoE').value = '';

        var instanciaTeclado = M.Modal.getInstance(document.getElementById('modalEditarConductor'));
        instanciaTeclado.close();
    };

    return (
        <div id="modalEditarConductor" className="modal bottom-sheet">
            <div className="modal-content">
               editar
              <h5>Informacion personal</h5>
              <div className="row">
                <div className="col s3">
                    <label for="primerNombre">Nombre</label>
                    <input placeholder="Placeholder" id="primerNombreE" type="text" className="validate" />
                </div>
                <div className="col s3">
                    <label for="segundoNombre">Segundo nombre</label>
                    <input placeholder="Placeholder" id="segundoNombreE" type="text" className="validate"/>
                </div>
                <div className="col s3">
                    <label for="apellidoPaterno">Apellido paterno</label>
                    <input placeholder="Placeholder" id="apellidoPaternoE" type="text" className="validate"/>
                </div>
                
                <div className="col s3">
                    <label for="apellidoMaterno">Apellido materno</label>
                    <input placeholder="Placeholder" id="apellidoMaternoE" type="text" className="validate"/>
                </div>

                <h5>Informacion del usuario</h5>
                <div className="row">
                    <div className="col s6">
                        <label for="username">Nombre de usuario</label>
                        <input placeholder="Placeholder" id="usernameE" type="text" className="validate"/>
                    </div>
                    <div className="col s6">
                        <label for="password">Password</label>
                        <input placeholder="Placeholder" id="passwordE" type="password" className="validate"/>
                    </div>
                    

                </div>
                <div className="modal-footer">  
                <a onClick={()=>{ClickEditar()}} className="waves-effect waves-light btn-large">Listo</a>
            </div>
              </div>
            </div>
        </div>
    );
}