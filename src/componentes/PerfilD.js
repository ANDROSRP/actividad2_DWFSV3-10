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
            </div>
        </div>
    );
}

export default PerfilD;