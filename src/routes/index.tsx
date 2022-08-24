import { BrowserRouter, Route, Routes, Link, useParams, useLocation } from 'react-router-dom';
import { useRoutes } from "react-router-dom";
import { Home } from '../pages/Home';
import { FormPage } from '../pages/Formulario';
import { Paises } from '../pages/Lista_Paises';
import { useState } from 'react';

// interface Formulario {
//     name: string;
//     email: string;
//     password: string;
// }

export const Rotas = () => {
    // const [formState, setFormState] = useState<Formulario>({
    //     name: "",
    //     email: "",
    //     password: "",
    // });

    return (
        <BrowserRouter>
            <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/form' element={<FormPage /*setFormState={setFormState}*//>}/>          
                    <Route path='/tabeladepaises'  element={<Paises /*formState={formState}*//>}/> 
            </Routes>
        </BrowserRouter>
    );
};