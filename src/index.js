import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home/home.js';
import CadastroVideo from './pages/cadastro/videos/';
import CadastroCategoria from './pages/cadastro/categoria/';

const Pagina404 = () => (<div>Página não encontrada - Erro 404</div>);



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video/" component={CadastroVideo} />
      <Route path="/cadastro/categoria/" component={CadastroCategoria} />
      <Route component={Pagina404} />

    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


