import React from "react";
import CardContact from "../components/CardsContact";
import FormContact from '../components/FormContact';
import './styles/Contact.css'

export default function Contact() {
    return(
        <div>
            <FormContact/>
            <CardContact/>
        </div>
    )
}