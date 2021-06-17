import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from 'hooks';

import Content from 'components/Content';
import OrderInfo from 'components/OrderInfo';
import FooterCheckout from 'components/FooterCheckout';

import { HOME } from 'routes';

import { Typography, Paper, Container, Button } from '@material-ui/core';

import { Title, PaperContainer, MaterialDivider } from './styles';

function CheckoutSuccess() {
  const { userInfo } = useAuth();

  return (
    <>
      <Content>
        <Title>
          <Typography variant="h4" gutterBottom>
            Prontinho {userInfo.user.firstName}!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Seu pedido será entregue no endereço abaixo em até:
          </Typography>
          <Typography variant="h3" gutterBottom>
            40 minutos
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
          color="secondary"
          size="large"
          component={Link}
          to={HOME}
        >
          {'<'} Voltar para a Página Inicial
        </Button>
      </FooterCheckout>
    </>
  )
}

export default CheckoutSuccess;
