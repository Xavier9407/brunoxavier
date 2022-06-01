import React from "react";
import "./style.css";

function Projetos(){
    return(
        <main>

        <a href="./Codar/" className="link-projeto">
            <div className="projeto">
                <div className="img-projeto"></div>
                <h3>Codar.</h3>
                <p>Uma página sobre uma empresa que desenvolve sites.</p>
                <span>Tecnologias: HTML, CSS.</span>
            </div>
        </a>

    </main>
    )
}

export default Projetos;