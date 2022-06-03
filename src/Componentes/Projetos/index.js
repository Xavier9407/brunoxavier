import React from "react";
import "./style.css";

import Header from "../Header"
import Footer from '../Footer';
import CardProjeto from "../CardProjeto";

function Projetos(){
    return(
        <div>   
            <Header /> 
            <main className="projetos">

                <CardProjeto 
                rota='Projetos/Codar' 
                titulo='Codar'
                descricao='Uma página sobre uma empresa que desenvolve sites.'
                tecnologias='Tecnologias: HTML, CSS.'/>

            </main>
            <Footer/>
        </div>
    )
}

export default Projetos;