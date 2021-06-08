import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { HOME, LOGIN } from 'routes';

import { LinearProgress } from '@material-ui/core';

import firebase from 'services/firebase';

import { useAuth } from 'hooks';

const MainPage = lazy(() => import('pages/Main'))
const Login = lazy(() => import('pages/Login'))

function App({ location }) {
  const [didCheckUserIn, setDidCheckUserIn]  = useState(false);
  const { userInfo, setUserInfo, logout } = useAuth();

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
  }, [setUserInfo, logout]);

  if (!didCheckUserIn) {
    return <LinearProgress />
  }

  if (isUserLoggedIn && location.pathname === LOGIN) {
    return <Redirect to={HOME} />
  }

  if (!isUserLoggedIn && location.pathname !== LOGIN) {
    return <Redirect to={LOGIN} />
  }

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path={LOGIN} component={Login} />
        <Route component={MainPage} />
      </Switch>
    </Suspense>
  )
}

App.propTypes = {
  location: PropTypes.object.isRequired
}

export default App;
