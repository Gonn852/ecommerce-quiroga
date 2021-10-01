import React from 'react';
import './App.css';
import Navegacion from './components/Navegacion';
import {Link, Route, Router, Redirect } from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import FormularioRegistro from './pages/FormularioRegistro';
import FormularioLogin from './pages/FormularioLogin';
import ProductoDetalle from './components/ProductoDetalle';


function App() {
  return (
    <BrowserRouter>
      <Navegacion/>
      <Route path='/home' component={Home} />
      <Route path='/registro' component={FormularioRegistro} />
      <Route path='/login' component={FormularioLogin} />
      <Route path='/detalle/:id' component={ProductoDetalle} />
      <Redirect path='/' to='/home'></Redirect>
    </BrowserRouter>
    );
}

export default App;
