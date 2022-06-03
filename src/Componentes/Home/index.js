import React from "react";
import "./style.css";

import Header from "../Header"
import Footer from '../Footer';

function Home(){
    
    return(
        <div>
            <Header />
            <main className="home">
                <div className="introducao">
                    <h1 className="titulo">Bruno Xavier</h1>

                    <span className="cargo">Desenvolvedor Front-End</span>

                    <p>Olá, sou um desenvolvedor Front-End, amo escrever código, aprender coisas novas e sou apaixonado por tecnologia, pretendendo cursar Ciência  da Computação, sempre em busca de crecer como pessoa e profissional, vamos trabalhar juntos?</p>

                    <span className="tecnologias">[HTML, CSS, JavaScript, React]</span>
                </div>
            </main>
            <Footer />
        </div>
    )
    
}

export default Home;