import React from 'react';

import Content from 'components/Content';

import { Typography } from '@material-ui/core';

import { Title } from './styles';

import { useAuth } from 'hooks';

function CheckoutConfirmation() {
  const { userInfo } = useAuth();

  return (
    <Content>
      <Title>
        <Typography variant="h4" gutterBottom>
          Oi {userInfo.user.firstName}!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Confere, por favor, se está tudo certo com seu pedido antes de finalizar?
        </Typography>
      </Title>
    </Content>
  )
}

export default CheckoutConfirmation;
