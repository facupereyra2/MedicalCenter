import React from "react";


export default function ConfigurationGeneral() {
    return (
        <div className='container-configuracion'>
            <h3>Configuracion General de la Cuenta</h3>
            <div className='conf-option'>
                <h4>Nombre y apellido</h4>
                <button>Editar</button>
            </div>
            <div className='conf-option'>
                <h4>Correo Electrónico</h4>
                <button>Editar</button>
            </div>
            <div className='conf-option'>
                <h4>Teléfono</h4>
                <button>Editar</button>
            </div>
        </div>
    )
}