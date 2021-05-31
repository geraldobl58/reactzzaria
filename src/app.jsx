import React, { lazy, Suspense, useState, useEffect, useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { LinearProgress } from '@material-ui/core';

import firebase from 'services/firebase';

import { AuthContext } from 'contexts/auth';

const MainPage = lazy(() => import('pages/Main'))
const Login = lazy(() => import('pages/Login'))

function App({ location }) {
  const [didCheckUserIn, setDidCheckUserIn]  = useState(false);
  const { userInfo, setUserInfo, logout } = useContext(AuthContext);

  const { isUserLoggedIn } = userInfo;

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUserInfo({
        isUserLoggedIn: !!user,
        user
      });
      setDidCheckUserIn(true);
    });

    window.logout = logout;
  }, [setUserInfo, logout]);

  if (!didCheckUserIn) {
    console.log('ainda não checou se usuário está logado ou não');
    return <LinearProgress />
  }

  console.log('já checou se usuário está logado');

  if (isUserLoggedIn) {
    console.log('Logado!');
    if (location.pathname === '/login') {
      console.log('Logado e na página de login');
      return <Redirect to='/' />
    } else {
      console.log('usuário logado mas não estpa na página de login');
    }
  } else {
    console.log('Não logado');
    if (location.pathname !== '/login') {
      return <Redirect to='/login' />
    } else {
      console.log('Logado e está na tela de login');
    }
  }

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path='/login' component={Login} />
        <Route component={MainPage} />
      </Switch>
    </Suspense>
  )
}

App.propTypes = {
  location: PropTypes.object.isRequired
}

export default App;
