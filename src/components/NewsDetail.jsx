import React from "react";
import "./styles/NewsDetail.css";

export default function NewsDetail({objNews}) {

    const {titulo,descripcion,contenido,autor,img} = objNews;

    const loadImage = imageName => (require(`./assets/${imageName}`));
    console.log(img)
    return(
        <div className="container-principal">
            
            <div className="news-container">
                <h1>{titulo}</h1>

                <hr></hr>
                
                <p>{descripcion}</p>

                <img src={loadImage(img)} alt={titulo}/>

                <p>{contenido}</p>
                <hr />
                <h5>{autor}</h5>
                
            </div>

        </div>
        
    )
}