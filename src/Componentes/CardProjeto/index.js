import React from "react";
import { Link } from "react-router-dom";
import './style.css'



function CardProjeto(props){
    return(
        <Link to={props.rota} className="card">
            <div className="projeto">
                <div className="img-projeto"></div>
                <h3>{props.titulo}</h3>
                <p>{props.descricao}</p>
                <span>{props.tecnologias}</span>
            </div>
        </Link>
    )
}

export default CardProjeto;