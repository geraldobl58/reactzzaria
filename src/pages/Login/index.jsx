import React, { useState, useEffect, useCallback, useContext } from 'react';
import { Grid, Button } from '@material-ui/core';

import firebase from 'services/firebase';

import { Container, Logo, GitHubButton } from './styles'
import { AuthContext } from 'contexts/auth';

function Login() {
  const { login } = useContext(AuthContext);

  const [userInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    user: null
  });

  const { isUserLoggedIn, user } = userInfo;

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUserInfo({
        isUserLoggedIn: !!user,
        user
      });
    });
  }, []);

  const logout = useCallback(() => {
    firebase.auth().signOut().then(() => {
      setUserInfo({
        isUserLoggedIn: false,
        user: null
      });
    });
  }, []);

  return (
    <Container>
      <Grid container justify="center" spacing={4}>
        <Grid item>
          <Logo />
        </Grid>
        <Grid item xs={12} container justify="center">
          {isUserLoggedIn && (
            <>
              <pre>{user.displayName}</pre>
              <Button variant="contained" onClick={logout}>
                Sair
              </Button>
            </>
          )}
          {!isUserLoggedIn && (
            <GitHubButton onClick={login}>
              Entrar com GitHub
            </GitHubButton>
          )}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login
