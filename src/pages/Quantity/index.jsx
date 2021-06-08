import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Typography, Grid, Input } from '@material-ui/core';

import Footer from 'components/Footer';

import { HOME } from 'routes';

import { Title, MaterialInput } from './styles';

function Quantity({ location }) {
  if (!location.state) {
    return <Redirect to={HOME} />
  }

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
        buttons={{
          back: {
            children: 'Mudar sabores'
          },
          action: {
            to: '/',
            children: 'Finalizar compra'
          }
        }}
      />
    </React.Fragment>
  )
}

Quantity.propTypes = {
  location: PropTypes.object.isRequired
}

export default Quantity;
