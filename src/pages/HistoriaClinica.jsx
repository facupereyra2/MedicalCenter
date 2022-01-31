import React from "react";
import HistoriaClinicaInfo from "../components/HistoriaClinicaInfo";
import HistoriaClinicaObservaciones from "../components/HistoriaClinicaObservaciones";
import './styles/HistoriaClinica.css'

export default function HistoriaClinica() {
    return(
        <div className="container-principal">
            <HistoriaClinicaInfo/>
            <HistoriaClinicaObservaciones/>
        </div>
        
    )
    
}