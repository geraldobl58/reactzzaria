import React from 'react';

import {  Grid, Paper, Typography } from '@material-ui/core';

import { Content, PaperContainer } from './styles';

function Checkout() {
  return (
    <Content>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant='h6'>Qual o endereço para entrega?</Typography>
          <Paper>
            <PaperContainer>
              Endereço para entrega
            </PaperContainer>
          </Paper>
          <Typography variant='h6'>Qual o seu telefone?</Typography>
          <Paper>
            <PaperContainer>
              Telefone
            </PaperContainer>
          </Paper>
        </Grid>
        <Grid container item xs={12} md={6} direction='column'>
          <Typography variant='h6'>Informações do seu pedido?</Typography>
          <Paper>
            <PaperContainer>
              Pedido
            </PaperContainer>
          </Paper>
        </Grid>
      </Grid>
    </Content>
  )
}

export default Checkout;
