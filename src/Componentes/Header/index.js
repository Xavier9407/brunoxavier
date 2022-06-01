import React from "react";
import "./style.css"

import {BrowserRouter, Link} from "react-router-dom"

function Header() {
    return(
            <header>
            <h2 className="portfolio">portfolio</h2>

            <nav>
                <BrowserRouter>
                    <ul>
                        <li><Link to="/" className="link-topo">Inicio</Link></li>
                        <li><Link to="/Projetos" className="link-topo">Projetos</Link></li>
                        <li>Contato</li>
                    </ul>
                </BrowserRouter>
            </nav>
        </header>
    )
}

export default Header;
