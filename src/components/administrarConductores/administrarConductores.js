import React, { useState, useEffect,useContext } from 'react';
import {CrearConductor} from '../administrarConductores/CrearConductor';


export function AdministrarConductores(){

    useEffect(() => {
        const M = window.M;

        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems, {});

    }, []);


    return (
        <div>
            <CrearConductor />
            <a class="waves-effect waves-light btn modal-trigger" href="#modalCrearConductor">Modal</a>
        </div>
    );
}


