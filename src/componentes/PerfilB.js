import React from 'react';
import '../estilos/Perfil.css';

function PerfilB(props){
    return(
        <div className="centeredb">
            <div className='contenedor-perfilb'>
                <img className='imagen-perfilb'
                src={require(`../imagenes/brais.png`)}
                alt='Foto de desarrollador' />
                <div className='contenedor-texto-perfilb'>
                    <p className='nombre-perfilb'>
                        <strong>{props.nombre}</strong> en {props.pais}
                    </p>
                    <p className='cargo-perfilb'>
                        {props.cargo} en <strong>{props.empresa}</strong>
                    </p>
                    <p className='texto-perfilb'>"{props.perfil}" </p>
                </div>
            </div>
        </div>
    );
}

export default PerfilB;