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
        user: user && {
          ...user,
          firstName: user.displayName.split(' ')[0]
        }
      });
      setDidCheckUserIn(true);
    });

    window.logout = logout;
  }, [setUserInfo, logout]);

  if (!didCheckUserIn) {
    return <LinearProgress />
  }

  if (isUserLoggedIn && location.pathname === '/login') {
    return <Redirect to='/' />
  }

  if (!isUserLoggedIn && location.pathname !== '/login') {
    return <Redirect to='/login' />
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
