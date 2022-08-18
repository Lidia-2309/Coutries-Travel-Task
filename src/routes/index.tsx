import { BrowserRouter, Switch, Route, Redirect, Link, useRouteMatch, useParams } from 'react-router-dom';
import { Home } from '../pages/Home';
import { FormPage } from '../pages/Formulario';
import { Paises } from '../pages/Lista_Paises';

export const Routes = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path='/home'>
                <Home/>
            </Route>
            <Route exact path='/form'>
                <FormPage/>
            </Route>
            <Route exact path='/tabeladepaises'>
                <Paises/>
            </Route>
            <Route path='/'>
                <Redirect to='/home'/>
            </Route>
        </Switch>
    </BrowserRouter>
    );
};