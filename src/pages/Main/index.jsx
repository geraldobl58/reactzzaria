import React, { useState, useContext } from 'react';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Grid,
  withStyles,
  Paper
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

      <Spacer />

      <Content>
        <Grid container direction='column' alignItems='center'>
          <Typography variant="h3">
            O que vai ser hoje, {userName}?
          </Typography>
          <Typography variant="h4">
            Escolha o tamanho da pizza:
          </Typography>
        </Grid>

        <Grid container spacing={6}>
          {pizzaSizes.map((item) => (
            <Grid item key={item.id} xs={4}>
              <Paper style={{ padding: 20 }}>
                <div>{item.size}cm</div>
                <Typography>{item.name}</Typography>
                <Typography>
                  {item.slices} fatias, {item.flavours} sabores
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Content>
    </React.Fragment>
  )
}

const pizzaSizes = [
  {
    id: 1,
    name: 'Pequena',
    size: 28,
    slices: 2,
    flavours: 1
  },
  {
    id: 2,
    name: 'Média',
    size: 30,
    slices: 6,
    flavours: 2
  },
  {
    id: 3,
    name: 'Grande',
    size: 32,
    slices: 8,
    flavours: 3
  }
]

const style = (theme) => ({
  main: theme.mixins.toolbar
});

const Spacer = withStyles(style)(({ classes }) => (
  <div className={classes.main} />
));

export default Main
