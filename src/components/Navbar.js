import {useSelector,useDispatch} from 'react-redux';
import React from 'react';
//import {toggleTodoAction,deleteTodoAction} from '../redux/redux';


export function Navbar() {
    const usuario = useSelector((state) => state.usuario);


    return (
        <nav>
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">Logo</a>
              <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {
                        (usuario)?(
                            <React.Fragment>
                                <li><a href="sass.html">Sass</a></li>
                                <li><a href="badges.html">Components</a></li>
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
  
  