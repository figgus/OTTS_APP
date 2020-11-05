import React, { useState, useEffect,useContext } from 'react';
import {CrearConductor} from '../administrarConductores/CrearConductor';
import axios from 'axios'
import {GetUrlApi} from '../../globales/VariablesGlobales'
import swal from 'sweetalert';

export function AdministrarConductores(){

    const [usuarios, setUsuarios] = useState([]);


    useEffect(() => {
        const M = window.M;

        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, {});
        GetConductores()

    }, []);

    const GetConductores = async ()=>{
        const res = await axios.get(GetUrlApi()+'/api/getConductores').catch((err)=>{
            console.log(err);
            alert('fallo');
        });
        if(res.status===200){
            setUsuarios(res.data);
        }
        else{
            swal('error');
        }
    };

    const clickDeleteConductor= async(usuario)=>{

        swal({
            title: "¿Esta seguro que desea remover este conductor?",
            //text:"Si confirma este gaveta quedará pendiente de arqueo",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then(async(result)=>{
            var data = {}
            data.userId = usuario._id;
            const url = GetUrlApi()+'/api/usuarios/'+data.userId
            const res = await axios.delete(url,data).catch((err)=>{
                swal({
                    title: "¿no se pudo borrar?",
                    //text:"Si confirma este gaveta quedará pendiente de arqueo",
                    icon: "error",
                    buttons: true,
                    dangerMode: true,
                })
            });
            if(res.status===200){
                swal({
                    title: "Usuario eliminado",
                    icon: "success"
                })
            }
            else{
                swal({
                    title: "No se pudo eliminar",
                    icon: "error"
                })
            }
        })



    }


    return (
        <div>
            <CrearConductor />

            
            <a class="waves-effect waves-light btn modal-trigger" href="#modalCrearConductor">Crear conductor</a>

            <table>
              <thead>
                <tr>
                    <th>Nombre completo</th>
                    <th>Nombre de usuario</th>
                    <th>Cargo</th>
                    <th>Acciones</th>
                </tr>
              </thead>

              <tbody>
                  {
                      usuarios.map((usuario)=>{
                          return (
                            <tr>
                                <td>{usuario.primerNombre} {usuario.apellidoPaterno}</td>
                                <td>{usuario.username}</td>
                                <td>{usuario.tipoUsuario.descripcion}</td>
                                <td>
                                    <i className="material-icons">edit</i>
                                    <i onClick={()=>{clickDeleteConductor(usuario)}} className="material-icons">delete</i>
                                </td>
                          </tr>
                          )
                      })
                  }

              
              </tbody>
            </table>
            


            
        </div>
    );
}


