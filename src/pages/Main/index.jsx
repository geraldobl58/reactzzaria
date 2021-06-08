import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import * as routes from 'routes';

import { withStyles } from '@material-ui/core';

import Header from 'components/Header';

const Pizzas = lazy(() => import('pages/Pizzas'));
const Flavours = lazy(() => import('pages/Flavours'));
const Quantity = lazy(() => import('pages/Quantity'));

const Main = () => (
  <React.Fragment>
    <Header />
      <Spacer />
      <Suspense fallback='Carregando...'>
        <Switch>
          <Route path={routes.HOME} exact component={Pizzas} />
          <Route path={routes.FLAVOURS} component={Flavours} />
          <Route path={routes.PIZZA_QUANTITY} component={Quantity} />
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
