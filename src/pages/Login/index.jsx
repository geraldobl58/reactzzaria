import React, { PureComponent } from 'react';
import { Grid, Button } from '@material-ui/core';

import firebase from 'firebase/app';
import 'firebase/auth';

import { Container, Logo, GitHubButton } from './styles'

var firebaseConfig = {
  apiKey: "AIzaSyDu1I6RCDm3O_HwbD2t1fMOqKCsIn85gQA",
  authDomain: "reactzzaria-b5b93.firebaseapp.com",
  projectId: "reactzzaria-b5b93",
  storageBucket: "reactzzaria-b5b93.appspot.com",
  messagingSenderId: "155151215295",
  appId: "1:155151215295:web:3b531ea721ae3b68f4f40a"
};
firebase.initializeApp(firebaseConfig);

class Login extends PureComponent {
  state = {
    isUserLoggedIn: false,
    user: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        isUserLoggedIn: !!user,
        user
      });
    });
  }

  login() {
    const provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  logout = () => {
    firebase.auth().signOut().then(() => {
      console.log('saiuuuuuuuuuuu');
      this.setState({
        isUserLoggedIn: false,
        user: null
      })
    })
  }

  render() {
    const { isUserLoggedIn, user } = this.state;

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
                <Button variant="contained" onClick={this.logout}>
                  Sair
                </Button>
              </>
            )}
            {!isUserLoggedIn && (
              <GitHubButton
                onClick={this.login}
              >
                Entrar com GitHub
              </GitHubButton>
            )}
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default Login
