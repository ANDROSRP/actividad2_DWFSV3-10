import React from 'react';
import '../estilos/Perfil.css';

function PerfilD(props){
    return(
        <div className="centeredd">
            <div className='contenedor-perfild'>
                <img className='imagen-perfild'
                src={require(`../imagenes/dennis.jpg`)}
                alt='Foto de desarrollador' />
                <div className='contenedor-texto-perfild'>
                    <p className='nombre-perfild'>
                        <strong>{props.nombre}</strong> en {props.pais}
                    </p>
                    <p className='cargo-perfild'>
                        {props.cargo} en <strong>{props.empresa}</strong>
                    </p>
                    <p className='texto-perfild'>"{props.perfil}" </p>
                </div>
                {/* Agregamos los botones para seguir en LinkedIn, YouTube y Twitter */}
                <button onClick={() => window.open(props.wikipedia, '_blank')}>
                    Seguir en Wikipedia
                </button>
                <button onClick={() => window.open(props.youtube, '_blank')}>
                    Seguir en YouTube
                </button>
                <button onClick={() => window.open(props.web, '_blank')}>
                    Seguir en Web
                </button>
            </div>
        </div>
    );
}

export default PerfilD;