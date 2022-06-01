import React from "react";
import "./style.css"



function Footer(){
    return(
        <footer>
            
        <div className="imagens-footer">
            <a href="https://github.com/Xavier9407" target="_blank" className="img-link" rel="noreferrer"><img className="img-footer" src="./imagens/github.jpg" alt="link GitHub"/></a>
            <a href="https://www.instagram.com/brunoxavier9407/" target="_blank" className="img-link" rel="noreferrer"><img className="img-footer" src="../assets/imagens/instagram.png" alt="link Instagram"/></a>
            <a href="https://www.devmedia.com.br/perfil/bruno-xavier-de-souza" target="_blank" className="img-link" rel="noreferrer"><img className="img-footer" src="../assets/imagens/DevMedia.png" alt="link DeviMedia"/></a>
        </div>
    </footer>
    )
}

export default Footer;