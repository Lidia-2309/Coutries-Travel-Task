import { BrowserRouter, Route, Routes, Link, useParams, useLocation } from 'react-router-dom';
import { useRoutes } from "react-router-dom";
import { Home } from '../pages/Home';
import { FormPage } from '../pages/Formulario';
import { useState } from 'react';
import { Select } from '../pages/Lista_Paises/nacoes';

export const Rotas = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/form' element={<FormPage />} />
                <Route path='/paises' element={<Select />} />
            </Routes>
        </BrowserRouter>
    );
};