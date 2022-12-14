import { BrowserRouter, Route, Routes, Link, useParams, useLocation } from 'react-router-dom';
import { Home } from '../pages/Home';
import { FormPage } from '../pages/Formulario';
import BasicTable from '../components/table/BasicTable';
import Agradecimento from '../pages/Agradecimento/agradecimento';

export const Rotas = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cadastro' element={<FormPage />} />
                <Route path='//destinos' element={<BasicTable/>} />
          <Route path='/fim' element={<Agradecimento/>} /> 
                
            </Routes>
        </BrowserRouter>
    );
};