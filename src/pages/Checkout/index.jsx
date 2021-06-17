import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Grid,
  Typography,
  Button
} from '@material-ui/core';

import Content from 'components/Content';
import OrderInfo from 'components/OrderInfo';
import FooterCheckout from 'components/FooterCheckout';

import { CHECKOUT_CONFIRMATION } from 'routes';

import { PaperContainer, MaterialTextField, } from './styles';

function Checkout() {
  return (
    <>
      <Content>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant='h6'>Qual o endereço para entrega?</Typography>
              <PaperContainer>
                <Grid container spacing={2}>
                  <TextField label='CEP' xs={4} autoFocus />
                  <Grid item xs={8} />
                  <TextField label='Rua' xs={9} />
                  <TextField label='Número' xs={3} />
                  <TextField label='Complemento' xs={12} />
                  <TextField label='Cidade' xs={9} />
                  <TextField label='Estado' xs={3} />
                </Grid>
              </PaperContainer>
            <Typography variant='h6'>Qual o seu telefone?</Typography>
              <PaperContainer>
                <TextField label='Telefone' xs={4} />
              </PaperContainer>
          </Grid>
          <Grid container item xs={12} md={6} direction='column'>
            <Typography variant='h6'>Informações do seu pedido?</Typography>
              <PaperContainer>
                <OrderInfo />
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

function TextField({ xs, autoFocus, ...props }) {
  return (
    <Grid item xs={xs}>
      <MaterialTextField
        fullWidth
        variant='outlined'
        inputProps={{
          autoFocus
        }}
        {...props}
      />
    </Grid>
  )
}

TextField.propTypes = {
  autoFocus: PropTypes.bool,
  xs: PropTypes.number
}

export default Checkout;
