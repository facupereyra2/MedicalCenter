import React from 'react';
import './styles/CardProfesionals.css'
import medico from './assets/medico.jpg'

export default function CardProfesionals() {
    return (
        <div className="card-profesionals">
            <img src={medico} alt="medico" />
            <div className="text-container">
                <h3>Apellido y nombre</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque exercitationem dicta aliquid ratione,
                    nam culpa nulla, ullam hic cupiditate consequatur sit architecto tempora assumenda! Provident culpa
                    sint officia laboriosam sunt!</p>
                <div className='boton' >
                    <button>Solicitar turno</button>
                </div>
            </div>
        </div>
    )
}