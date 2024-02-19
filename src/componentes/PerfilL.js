import React from 'react';
import '../estilos/Perfil.css';

function PerfilL(props){
    return(
        <div className="centeredl">
            <div className='contenedor-perfill'>
                <img className='imagen-perfill'
                src={require(`../imagenes/linus.jpg`)}
                alt='Foto de desarrollador' />
                <div className='contenedor-texto-perfill'>
                    <p className='nombre-perfill'>
                        <strong>{props.nombre}</strong> en {props.pais}
                    </p>
                    <p className='cargo-perfill'>
                        {props.cargo} en <strong>{props.empresa}</strong>
                    </p>
                    <p className='texto-perfill'>"{props.perfil}" </p>
                </div>
                {/* Agregamos los botones para seguir en LinkedIn, YouTube y Twitter */}
                <button onClick={() => window.open(props.linkedin, '_blank')}>
                    Seguir en LinkedIn
                </button>
                <button onClick={() => window.open(props.youtube, '_blank')}>
                    Seguir en YouTube
                </button>
                <button onClick={() => window.open(props.twitter, '_blank')}>
                    Seguir en Twitter
                </button>
            </div>
        </div>
    );
}

export default PerfilL;