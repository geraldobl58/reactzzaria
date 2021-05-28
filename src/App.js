import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import MainPage from 'pages/Main';
import Login from 'pages/Login';

const App = () => (
  <React.Fragment>
    <CssBaseline />
      <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login} />
        <Route component={MainPage} />
      </Switch>
    </BrowserRouter>
  </React.Fragment>
)

export default App
