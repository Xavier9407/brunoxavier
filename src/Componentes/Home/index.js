import React from "react";
import "./style.css";

function Home(){
    return(
        <main className="home">
        <div className="introducao">
            <h1 className="titulo">Bruno Xavier</h1>

            <span className="cargo">Desenvolvedor Front-End</span>

            <p>Olá, meu nome é Bruno Xavier, sou um desenvolvedor Front-End, amo escrever código, aprender coisas novas e sou apaixonado por tecnologia, vamos trabalhar juntos?</p>

            <span className="tecnologias">[HTML, CSS, JavaScript, React]</span>
        </div>
    </main>
    )
}

export default Home;