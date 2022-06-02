import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "../Home";
import Projetos from "../Projetos";
import Contato from "../Contato";

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route path="/Projetos" element={ <Projetos /> } />
            <Route path="/Contato" element={ <Contato /> } />
        </Routes>
    </BrowserRouter>
)

export default Rotas;