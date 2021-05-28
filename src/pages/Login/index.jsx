import React from 'react';
import { Button, Grid } from '@material-ui/core';

import { ReactComponent as Logo } from '../../images/logo-react-zzaria.svg'

const Login = () => (
  <React.Fragment>
    <Grid container>
      <Grid item>
        <Logo />
      </Grid>
      <Grid item>
        <Button>Entrar com GitHub</Button>
      </Grid>
    </Grid>
  </React.Fragment>
)

export default Login
