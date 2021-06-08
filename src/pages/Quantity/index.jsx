import React from 'react';

import { Typography, Grid, Input } from '@material-ui/core';

import { FLAVOURS } from 'routes';

import Footer from 'components/Footer';

import { Title, MaterialInput } from './styles';


function Quantity() {
  return (
    <React.Fragment>
      <Grid container direction='column' alignItems='center'>
        <Title>
          <Typography variant="h4" gutterBottom>
            Quantas pizzas você gostaria<br />
            de pedir, com esses sabores?
          </Typography>
        </Title>
      </Grid>
      <MaterialInput>
        <Input type='number' defaultValue='1' autoFocus />
      </MaterialInput>

      <Footer
        buttons={[
          {
            to: FLAVOURS,
            children: 'Mudar sabores'
          },
          {
            to: '/',
            children: 'Finalizar compra'
          }
        ]}
      />
    </React.Fragment>
  )
}

export default Quantity;
