import React from "react";
import "./style.css";

import Header from "../Header";
import Footer from '../Footer';

function Contato(){

    return(
        <div>
            <Header />
            <main className="Contato">
                <h2>Formas de contato</h2>
            </main>
            <Footer/>
        </div>
    )
}


export default Contato;