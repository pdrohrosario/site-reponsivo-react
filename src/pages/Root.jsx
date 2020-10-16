import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import StoreProvider from 'components/Store/Provider';
import RoutesPrivate from 'components/Routes/Private/Private';
import Home from './Home/Home2';
import entrounosite from './Home/entrounosite';
import Login from './Login/Login';
import CadastroProduto from '../pages/produtos/cadastro'
import ConsultaProdutos from '../pages/produtos/consulta'

const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/cadastro-produtos/:sku?" component={CadastroProduto}/>
        <Route exact path="/consulta-produtos" component={ConsultaProdutos}/> 
        <RoutesPrivate path="/home" component={Home} />
        <Route exact path="/" component={entrounosite} />
      </Switch>
    </StoreProvider>
  </Router>
)


export default PagesRoot;
