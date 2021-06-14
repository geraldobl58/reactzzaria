import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { AppBar, Toolbar } from '@material-ui/core';

import HeaderCommon from 'components/HeaderCommon';
import HeaderCheckout from 'components/HeaderCheckout';

import { CHECKOUT } from 'routes';

import { MaterialToolbar } from './styles';

const Header = () => {
  return (
    <AppBar>
      <MaterialToolbar>
        <Toolbar>
          <Switch>
            <Route path={CHECKOUT} component={HeaderCheckout} />
            <Route component={HeaderCommon} />
          </Switch>
        </Toolbar>
      </MaterialToolbar>
    </AppBar>
  )
}

export default Header;
