import React from 'react';


const Noticia = ({ noticia }) => {
    //Extraer los datos
    const { urlToImage, url, title, description, source } = noticia;

    const imagen = (urlToImage) ?
        <div className="card-image">
            <img src={urlToImage} alt={title} />
            <span className="card-title">{source.name}</span>
        </div>
        : null;
    return (
        <div className="col s12 m6 l4">
            <div className="card">
                {imagen}
                <div className="card-content">
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener no referrer noreferrer"
                        className="wabes-effect waves-light btn"
                    >
                        Ver Noticia Completa
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Noticia;