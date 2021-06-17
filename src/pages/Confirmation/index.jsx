import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth, useOrder } from 'hooks';

import Content from 'components/Content';
import OrderInfo from 'components/OrderInfo';
import FooterCheckout from 'components/FooterCheckout';

import { CHECKOUT_SUCCESS } from 'routes';

import { Typography, Paper, Container, Button } from '@material-ui/core';

import { Title, PaperContainer, MaterialDivider } from './styles';

function CheckoutConfirmation() {
  const { userInfo } = useAuth();
  const { sendOrder } = useOrder();

  return (
    <>
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
              <MaterialDivider />
              <Typography variant="h6" gutterBottom>
                Endereço para entrega:
              </Typography>
              <Typography>
                Rua john doe, 1368
              </Typography>
              <MaterialDivider />
              <Typography variant="h6" gutterBottom>
                Telefone para contato:
              </Typography>
              <Typography>
                (99)95287-1758
              </Typography>
            </PaperContainer>
          </Paper>
        </Container>
      </Content>

      <FooterCheckout justifyContent='center'>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to={CHECKOUT_SUCCESS}
          onClick={sendOrder}
        >
          Tudo certo!
        </Button>
      </FooterCheckout>
    </>
  )
}

export default CheckoutConfirmation;
