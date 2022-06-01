import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "../Home";
import Projetos from "../Projetos";

function Rotas  ()  {
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={ <Home/> } />
            <Route path="/Projetos" element={ <Projetos/> } />

        </Routes>
    </BrowserRouter>
}

export default Rotas;