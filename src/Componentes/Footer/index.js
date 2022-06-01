import React from "react";
import "./style.css"
import {Link} from "react-router-dom"


function Footer(){
    return(
        <footer>
            
        <div className="imagens-footer">
            <Link to="https://github.com/Xavier9407" target="_blank" className="img-link"><img class="img-footer" src="../assets/imagens/github.jpg" alt="link GitHub"/></Link>
            <Link to="https://www.instagram.com/brunoxavier9407/" target="_blank" className="img-link"><img class="img-footer" src="../assets/imagens/instagram.png" alt="link Instagram"/></Link>
            <Link to="https://www.devmedia.com.br/perfil/bruno-xavier-de-souza" target="_blank" className="img-link"><img class="img-footer" src="../assets/imagens/DevMedia.png" alt="link DeviMedia"/></Link>
        </div>
    </footer>
    )
}

export default Footer;