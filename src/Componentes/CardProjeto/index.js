import React from "react";
import './style.css'




function CardProjeto(props){
    return(
        <a href={props.rota} className="card" target="_blank" rel="noreferrer">
            <div className="projeto">
                <div className="img-projeto" style={{backgroundImage: props.image}} ></div>            
                <h3>{props.titulo}</h3>
                <p>{props.descricao}</p>
                <span>{props.tecnologias}</span>
            </div>
        </a>
    )
       
}

export default CardProjeto;