import React from 'react';
import './styles/ConfigurationGeneral.css'

export default function ConfigurationGeneral(){
    return(
            <div className='container-configuracion'>
                <h3>Configuracion de Notificaciones de la Cuenta</h3>
                <div className='conf-option'>
                    <h4>Nombre y apellido</h4>
                    <button className='boton'>Editar</button>
                </div>
            </div>
    )
}