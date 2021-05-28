import React, { useState, useEffect, useCallback } from 'react';
import { Grid, Button } from '@material-ui/core';

import firebase from 'firebase/app';
import 'firebase/auth';

import { Container, Logo, GitHubButton } from './styles'

const firebaseConfig = {
  apiKey: "AIzaSyDu1I6RCDm3O_HwbD2t1fMOqKCsIn85gQA",
  authDomain: "reactzzaria-b5b93.firebaseapp.com",
  projectId: "reactzzaria-b5b93",
  storageBucket: "reactzzaria-b5b93.appspot.com",
  messagingSenderId: "155151215295",
  appId: "1:155151215295:web:3b531ea721ae3b68f4f40a"
};
firebase.initializeApp(firebaseConfig);

function Login() {
  const [userInfo, setUserInfo] = useState({
    isUserLoggedIn: false,
    user: null
  });

  const { isUserLoggedIn, user } = userInfo;

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user)
      setUserInfo({
        isUserLoggedIn: !!user,
        user
      });
    });
  }, []);

  const login = useCallback(() => {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithRedirect(provider);
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
