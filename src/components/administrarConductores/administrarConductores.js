import React, { useState, useEffect,useContext } from 'react';
import {CrearConductor} from '../administrarConductores/CrearConductor';
import {EditarConductor} from '../administrarConductores/EditarConductor';
import axios from 'axios'
import {GetUrlApi} from '../../globales/VariablesGlobales'
import swal from 'sweetalert';
import {useDispatch,useSelector} from 'react-redux'; 
import{ClickUsuarioAction} from '../../redux/redux';


export function AdministrarConductores(){
    const dispatch = useDispatch();
    const clickearUsuario = (usuario) => dispatch(ClickUsuarioAction(usuario));
    const usuarioClickeado = useSelector((state) => state.usuarioClickeado);
    const [usuarios, setUsuarios] = useState([]);
    const M = window.M;

    useEffect(() => {
        

        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, {
            
        });
        GetConductores()


        var elems = document.getElementById('modalEditarConductor');
        M.Modal.init(elems, {
            onOpenEnd:()=>{
                console.log(usuarioClickeado);
                if(!usuarioClickeado)
                {
                    return
                }
                document.getElementById('primerNombreE').value = usuarioClickeado.primerNombre;
                document.getElementById('segundoNombreE').value =  usuarioClickeado.segundoNombre;
                document.getElementById('apellidoPaternoE').value =  usuarioClickeado.apellidoPaterno;
                document.getElementById('apellidoMaternoE').value =  usuarioClickeado.apellidoMaterno;
                document.getElementById('usernameE').value =  usuarioClickeado.username;
                document.getElementById('passwordE').value =  usuarioClickeado.password;
            }
        });

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

    const clickEditarUsuario = (usuario)=>{
        debugger
        clickearUsuario(usuario);
        
        console.log(usuarioClickeado)
        const modalEditar = document.getElementById('modalEditarConductor');
        M.Modal.getInstance(modalEditar).open();
    }


    return (
        <div>
            <CrearConductor />
            <EditarConductor />
            
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
                                <td>{usuario.infoPersonal.primerNombre} {usuario.infoPersonal.apellidoPaterno}</td>
                                <td>{usuario.username}</td>
                                <td>{usuario.tipoUsuario.descripcion}</td>
                                <td>
                                    <a onClick={()=>{clickEditarUsuario(usuario)}}><i className="material-icons">edit</i></a>
                                    
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


