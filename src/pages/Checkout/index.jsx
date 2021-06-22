import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import {
  Grid,
  Typography,
  Button
} from '@material-ui/core';

import Content from 'components/Content';
import OrderInfo from 'components/OrderInfo';
import FooterCheckout from 'components/FooterCheckout';
import FormAddress from 'components/FormAddress';
import PhoneField from 'components/PhoneField';

import { CHECKOUT_CONFIRMATION, HOME } from 'routes';

import { useOrder } from 'hooks';

import { PaperContainer } from './styles';

function Checkout() {
  const { order, addPhone, addAddress } = useOrder();

  if (!order.pizzas.length) {
    return <Redirect to={HOME} />
  }

  return (
    <>
      <Content>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant='h6'>Qual o endereço para entrega?</Typography>
              <PaperContainer>
                <FormAddress onUpdate={addAddress} />
              </PaperContainer>
            <Typography variant='h6'>Qual o seu telefone?</Typography>
              <PaperContainer>
                <PhoneField onUpdate={addPhone} />
              </PaperContainer>
          </Grid>
          <Grid container item xs={12} md={6} direction='column'>
            <Typography variant='h6'>Informações do seu pedido?</Typography>
              <PaperContainer>
                <OrderInfo showOptions />
              </PaperContainer>
          </Grid>
        </Grid>
      </Content>

      <FooterCheckout>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={CHECKOUT_CONFIRMATION}
        >
          Confirmar dados
        </Button>
      </FooterCheckout>
    </>
  )
}

export default Checkout;
