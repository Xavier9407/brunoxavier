import React from "react";
import "./style.css"

import GitHub from "./imagens/github.jpg";
import DevMedia from "./imagens/DevMedia.png";
import Insta from "./imagens/instagram.png";

function Footer(){
    return(
        <footer>
            
        <div className="imagens-footer">
            <a href="https://github.com/Xavier9407" target="_blank" className="img-link" rel="noreferrer"><img className="img-footer" src={GitHub} alt="link GitHub"/></a>
            <a href="https://www.instagram.com/brunoxavier9407/" target="_blank" className="img-link" rel="noreferrer"><img className="img-footer" src={Insta} alt="link Instagram"/></a>
            <a href="https://www.devmedia.com.br/perfil/bruno-xavier-de-souza" target="_blank" className="img-link" rel="noreferrer"><img className="img-footer" src={DevMedia} alt="link DeviMedia"/></a>
        </div>
    </footer>
    )
}

export default Footer;