import React,{useState} from 'react';
import '../components/styles/ConfigurationGeneral.css'
import ConfigurationGeneral from '../components/ConfigurationGeneral';
import ConfigurationSecurity from '../components/ConfigurationSecurity';
import ConfigurationNotifications from '../components/ConfigurationNotifications'
import ConfigurationObrasSociales from '../components/ConfigurationObrasSociales'

export default function Configuration(){
    let [general,setGeneral] = useState(false)
    let [seguridad,setSeguridad] = useState(false)
    let [obrasSociales,setObrasSociales] = useState(false)
    let [notificaciones,setNotificaciones] = useState(false)

    const changeStateGeneral = () =>{
        setGeneral(true)
        setSeguridad(false)
        setObrasSociales(false)
        setNotificaciones(false)
    }

    const changeStateSeguridad = () =>{
        setGeneral(false)
        setSeguridad(true)
        setObrasSociales(false)
        setNotificaciones(false)
    }

    const changeStateObrasSociales = () =>{
        setGeneral(false)
        setSeguridad(false)
        setObrasSociales(true)
        setNotificaciones(false)
    }

    const changeStateNotificaciones = () =>{
        setGeneral(false)
        setSeguridad(false)
        setObrasSociales(false)
        setNotificaciones(true)
    }



    return(
        <div className='container-principal'>

            <div className='container-aside'>

                <button onClick={()=> changeStateGeneral()}>General</button>
                <button onClick={()=> changeStateSeguridad()}>Seguridad</button>
                <button onClick={()=> changeStateObrasSociales()}>Obras Sociales</button>
                <button onClick={()=> changeStateNotificaciones()}>Notificaciones</button>
            </div>
            {general && <ConfigurationGeneral/>}

            {seguridad && <ConfigurationSecurity/>}

            {obrasSociales && <ConfigurationObrasSociales/>}

            {notificaciones && <ConfigurationNotifications/>}
        </div>
    )
}