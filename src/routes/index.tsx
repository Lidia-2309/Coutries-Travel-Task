import { BrowserRouter, Route, Routes, Link, useParams, useLocation } from 'react-router-dom';
import { Home } from '../pages/Home';
import { FormPage } from '../pages/Formulario';
import { Select } from '../pages/Lista_Paises/nacoes';
import PAISESSELECAO from '../pages/Teste/teste';
import BasicTable from '../components/table/BasicTable';


export const Rotas = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/form' element={<FormPage />} />
                <Route path='/paises' element={<Select />} />
                <Route path='/teste' element={<PAISESSELECAO />} />
                <Route path='/table' element={<BasicTable/>} 
                
                />
            </Routes>
        </BrowserRouter>
    );
};