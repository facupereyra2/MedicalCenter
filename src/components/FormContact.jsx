import React from 'react'
import './styles/FormContact.css'

export default function Contact() {
    return (
        <div className="form">
            <div className='info'>
                <input type="text" placeholder='Nombre y apellido' />
                <input type="email" placeholder='E-Mail' />
                <input type="text" placeholder='Celular' />
                <input type="text" placeholder='Motivo' />
            </div>
            <div className='consulta'>
                <textarea type="textarea" placeholder='Su Consulta' />
                <button type="submit">Enviar</button>
            </div>
        </div>
    )
}
