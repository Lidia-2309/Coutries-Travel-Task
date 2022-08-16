import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Home } from '../pages/Home';
import { FormPage } from '../pages/Formulario';

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
            <Route path='/'>
                <Redirect to='/home'/>
            </Route>
        </Switch>
    </BrowserRouter>
    );
};