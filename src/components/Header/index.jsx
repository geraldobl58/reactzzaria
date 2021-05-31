import React, { useState, useContext } from 'react';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
 } from '@material-ui/core';

import { AccountCircle } from '@material-ui/icons';

import { AuthContext } from 'contexts/auth';

import { Logo, LogoContainer, MaterialToolbar } from './styles';

const Header = () => {
  const [anchorElement, setAnchorElement] = useState(null);

  const { userInfo, logout } = useContext(AuthContext);


  const handleOpenMenu = (e) => {
    setAnchorElement(e.target);
  }

  const handleClose = () => {
    setAnchorElement(null);
  }

  return (
    <AppBar>
      <MaterialToolbar>
        <Toolbar>
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <Typography
            color="inherit">
              Olá {userInfo.user.displayName}, seja vindo!
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
  )
}

export default Header;
