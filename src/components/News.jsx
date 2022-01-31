import React from "react";
import '../components/styles/News.css'
import imgnews from '../components/assets/news.png'


const News = ({objNews}) => {

    const {titulo,descripcion,img} = objNews;
    const loadImage = imageName => (require(`./assets/${imageName}`));

    return (
        <div className="container-news">
                <div className="card-news">
                    <img src={loadImage(img)} alt={titulo}/>
                    <div className="text-container">
                        <h3>{titulo}</h3>
                        <p>{descripcion}</p>
                        <div className="boton">
                            <button>Seguir leyendo</button>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default News;