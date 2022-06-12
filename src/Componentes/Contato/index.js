import React from "react";
import "./style.css";

import Header from "../Header";
import Footer from '../Footer';

import outlook from "./outlook-logo.png";
import whatsapp from "./whatsapp-logo.png"
import telefone from "./telefone-logo.png";


function Contato(){

    return(
        <div>
            <Header />
            <main className="contato">
               <div className="cont"><a href="mailto:bruno.xavier.souza@hotmail.com" target="_blank" rel="noreferrer" alt="e-mail">
                    <img src={outlook} className="email" alt="e-mail"/>
                    <p style={{backgroundColor: "red"}}>Não olho muito e-mail.</p>
                </a></div> 

               <div  className="cont"><a href="https://wa.me/5533999298017" target="_blank" rel="noreferrer">
                    <img src={whatsapp} className="whatsapp" alt="WhatsApp"/>
                    <p style={{backgroundColor: "green"}}>Melhor opção.</p>   
                </a></div> 

                <div className="cont"><a href="tel:+5533999298017" target="_blank" rel="noreferrer">
                    <img src={telefone} className="celular" alt="telefone"/>
                    <p style={{backgroundColor: "yellow"}}>Talvez eu não veja.</p>
                </a></div> 
            </main>
            <Footer/>
        </div>
    )
}


export default Contato;