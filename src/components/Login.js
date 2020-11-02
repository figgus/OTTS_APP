import React,{useState} from 'react';
import {useDispatch} from 'react-redux'; 
import{LoginAction} from '../redux/redux';
import {GetUrlApi} from '../globales/VariablesGlobales';
import { Redirect } from 'react-router'

export function Login() {
    const [isLogedIn, setIsLogedIn] = useState(false);
    const dispatch = useDispatch();

    const iniciarSesion = (usuario) => dispatch(LoginAction(usuario));
    
    const login=async ()=>{
        var data= {};
        data.username=document.getElementById('username').value;
        data.password=document.getElementById('password').value;
        var respuesta = await fetch(GetUrlApi()+'/api/LoginUsuarios' , {
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'post',
            body:JSON.stringify(data) 
        }).catch(()=>{
            alert('no funciono');
            return;
        });
        if(respuesta.ok){
            const res=await respuesta.json();
            if(res.length===0){
                alert('usuario invalido');
                return;
            }
            iniciarSesion(data.username);
            setIsLogedIn(true);
        }
        else{
            alert('error');
        }
        
    }


  return (
    <div >
        {
            (isLogedIn)?(
                <Redirect to="/dashboard"/>
            ):(null)
        }
        <div className="row">
            <div className="col s4"></div>
            <div className="col s4">
                <input placeholder="Nombre de usuario" id="username" type="text" className="validate"></input>
                <input placeholder="password" id="password" type="password" className="validate"></input>
                <center>
                    <a onClick={()=>{login()}} className="waves-effect waves-light btn">Entrar</a>
                </center>
            </div>
            <div className="col s4"></div>
        </div>
      
    </div>
  );
}

