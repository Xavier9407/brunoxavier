import React from "react";
import "./style.css"

import {Link} from "react-router-dom"

function Header() {
    return(
            <header>
            <h2 className="portfolio">portfolio</h2>

            <nav>
            
                    <ul>
                        <li><Link to="/" className="link-topo">Inicio</Link></li>
                        <li><Link to="/Projetos" className="link-topo">Projetos</Link></li>
                        <li><Link to="/Contato" className="link-topo">Contato</Link></li>
                    </ul>
          
            </nav>
        </header>
    )
}

export default Header;
