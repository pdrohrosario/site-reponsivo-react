import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from 'components/Store/Context';
import UIButton from 'components/UI/Button/Button';
import Footer2 from 'components/footer2'
import '../../footer.css'
import '../../color.css'

import './Login.css';

function initialState() {
  return { user: '', password: '' };
}

function login({ user, password }) {
  if (user === '@admin' && password === 'admin') {
    return { token: '1234' };
  }
  return { error: 'Usuário ou senha inválido' };
}

const UserLogin = () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    const { token, error } = login(values);

    if (token) {
      setToken(token);
      return history.push('/consulta-produtos');
    }

    setError(error);
    setValues(initialState);
  }

  return (
      <div>
      <div className="box">
      <div>
      <p class="h1 text-center">Login</p>
      <p class="h5 text-secondary text-center mb-4">Para acessar o sistema digite suas credênciais</p>
      <form onSubmit={onSubmit}>
      <div class="form-group h5">
        <label for="user" >Usuário:</label>
        <input type="text" className="form-control" placeholder="@admin" 
              id="user"
              type="text"
              name="user"
              onChange={onChange}
              value={values.user}/>
      </div>
      <div class="form-group h5">
      <label for="exampleInputPassword1">Senha:</label>
      <input type="password" className="form-control" placeholder="..." id="password"
            type="password"
            name="password"
            onChange={onChange}
            value={values.password}/>
          
        </div>
        {error && (
          <div className="user-login__error">{error}</div>
        )}
        <div classname="form-group">
        <UIButton
          type="submit"
          theme="contained-green"
          className=" btn btn-primary"
          rounded
        >
          Entrar
        </UIButton>
        </div>
      </form>
      </div>
      </div>
      <Footer2 className="footer"/>
   </div>    
  );
};

export default UserLogin;
