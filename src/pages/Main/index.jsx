import React, { useState, useContext } from 'react';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Grid
 } from '@material-ui/core';

import { AccountCircle } from '@material-ui/icons';

import { AuthContext } from 'contexts/auth';

import { Logo, LogoContainer, MaterialToolbar, Content } from './styles';

const Main = () => {
  const [anchorElement, setAnchorElement] = useState(null);

  const { userInfo, logout } = useContext(AuthContext);

  const userName = userInfo.user.displayName.split(' ')[0];

  const handleOpenMenu = (e) => {
    setAnchorElement(e.target);
  }

  const handleClose = () => {
    setAnchorElement(null);
  }

  return (
    <React.Fragment>
      <AppBar>
        <MaterialToolbar>
          <Toolbar>
            <LogoContainer>
              <Logo />
            </LogoContainer>

            <Typography
              color="inherit">
                Olá {userName}, seja vindo!
            </Typography>

            <IconButton color="inherit" onClick={handleOpenMenu}>
              <AccountCircle />
            </IconButton>

            <Menu
              open={Boolean(anchorElement)}
              onClose={handleClose}
              anchorEl={anchorElement}
            >
              <MenuItem onClick={logout}>Sair</MenuItem>
            </Menu>

          </Toolbar>
        </MaterialToolbar>
      </AppBar>

      <Content>
        <Grid container justify="center">
          <Grid item>
            <Typography variant="h3">
              O que vai ser hoje, {userName}?
            </Typography>
          </Grid>
        </Grid>
      </Content>

    </React.Fragment>
  )
}

export default Main
