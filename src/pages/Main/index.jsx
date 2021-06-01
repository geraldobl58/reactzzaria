import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import { HOME, FLAVOURS } from 'routes';

import { withStyles } from '@material-ui/core';

import Header from 'components/Header';

const Pizzas = lazy(() => import('pages/Pizzas'));
const Flavours = lazy(() => import('pages/Flavours'));

const Main = () => (
  <React.Fragment>
    <Header />
      <Spacer />
      <Suspense fallback='Carregando...'>
        <Switch>
          <Route path={HOME} exact component={Pizzas} />
          <Route path={FLAVOURS} component={Flavours} />
        </Switch>
      </Suspense>
  </React.Fragment>
)

const style = (theme) => ({
  main: theme.mixins.toolbar
});

const Spacer = withStyles(style)(({ classes }) => (
  <div className={classes.main} />
));

export default Main
