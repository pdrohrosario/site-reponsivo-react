import React, { useContext } from 'react';
import StoreContext from 'components/Store/Context';
import Navbar from 'components/navbar2'
import Footer from 'components/footer'

const PagesHome = () => {
  const { setToken } = useContext(StoreContext);
  return (
    <div className="pages-home">
      <Navbar />
      <div className="jumbotron">
        <h1 className="display-3">Bem Vindo!</h1>
        <p className="lead">Este é seu sistema, utilize a barra de navegação para acessar as páginas.</p>
        <hr className="my-4"/>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">Cadastrar</a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PagesHome;
