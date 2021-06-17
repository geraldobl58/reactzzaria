import React from 'react';

import { useAuth } from 'hooks';

import Content from 'components/Content';

import { Typography, Paper, Container } from '@material-ui/core';

import { Title, PaperContainer } from './styles';
import OrderInfo from 'components/OrderInfo';

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
      <Container maxWidth='sm'>
        <Paper>
          <PaperContainer>
            <Typography variant="h6" gutterBottom>
              Seu pedido:
            </Typography>
            <OrderInfo />
          </PaperContainer>
        </Paper>
      </Container>
    </Content>
  )
}

export default CheckoutConfirmation;
