import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { withStyles } from '@material-ui/core';

import { Content } from './styles';

import Header from 'components/Header';

const Pizzas = lazy(() => import('pages/Pizzas'));

const Main = () => (
  <React.Fragment>
    <Header />
    <Spacer />
    <Content>
      <Suspense fallback='Carregando...'>
        <Switch>
          <Route path='/' component={Pizzas} />
        </Switch>
      </Suspense>
    </Content>
  </React.Fragment>
)

const style = (theme) => ({
  main: theme.mixins.toolbar
});

const Spacer = withStyles(style)(({ classes }) => (
  <div className={classes.main} />
));

export default Main
