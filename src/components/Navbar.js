import {useSelector,useDispatch} from 'react-redux';
import React,{useEffect,useState} from 'react';
import { Redirect } from 'react-router'

export function Navbar() {
    const usuario = useSelector((state) => state.usuario);
    const [redirectAdminCond, setRedirectAdminCond] = useState(false);
    useEffect(() => {
        const M = window.M;
        M.AutoInit();
    });


    const clickAdminConductores = ()=>{
        setRedirectAdminCond(true);
    };

    return (
        <nav>
            {
                (redirectAdminCond)?(
                    <Redirect to="/conductores"/>
                ):(null)
            }   
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">Logo</a>
                <ul id="dropdown1" className="dropdown-content">
                  <li><a onClick={()=>{clickAdminConductores()}} href="javascript:void(9)">Administrar conductores</a></li>
                  <li><a href="javascript:void(9)">Administrar rutas</a></li>
                  <li className="divider">no se</li>
                  <li><a href="javascript:void(9)">three</a></li>
                </ul>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {
                        (usuario)?(
                            <React.Fragment>
                                <li><a href="sass.html">Reportes</a></li>
                                <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Administrar<i className="material-icons right">arrow_drop_down</i></a></li>
                                <li><a href="collapsible.html">{usuario}</a></li>
                            </React.Fragment>
                        ):(null)
                    }
                    <li><a href="badges.html">Cerrar Sesión</a></li>
              </ul>
            </div>
        </nav>
    );
  }
  
  