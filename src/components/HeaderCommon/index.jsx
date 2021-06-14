import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  IconButton,
  Typography,
  Menu,
  MenuItem,
 } from '@material-ui/core';

import { AccountCircle } from '@material-ui/icons';

import { HOME } from 'routes';

import { useAuth } from 'hooks';

import LogoCommon from '../LogoCommon';

import { LogoContainer } from './styles';

function HeaderCommon() {
  const [anchorElement, setAnchorElement] = useState(null);

  const { userInfo, logout } = useAuth();

  const handleOpenMenu = (e) => {
    setAnchorElement(e.target);
  }

  const handleClose = () => {
    setAnchorElement(null);
  }

  return (
    <>
      <LogoContainer>
        <Link to={HOME}>
          <LogoCommon />
        </Link>
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
    </>
  )
}

export default HeaderCommon;
