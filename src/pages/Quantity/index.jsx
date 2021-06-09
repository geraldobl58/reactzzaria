import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Typography, Grid, Input, Button } from '@material-ui/core';

import Footer from 'components/Footer';

import { HOME, CHECKOUT } from 'routes';

import { Title, MaterialContent } from './styles';

function Quantity({ location }) {
  const [quantity, setQuantity] = useState(1);

  if (!location.state) {
    return <Redirect to={HOME} />
  }

  function handleChange(e) {
    const { value } = e.target;

    if (value >= 1) {
      setQuantity(e.target.value)
    }
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
      <MaterialContent>
        <Input
          type='number'
          value={quantity}
          onChange={handleChange}
          autoFocus
        />
        <Button variant='contained' color='secondary'>
          Adicionar e<br /> montar outra
        </Button>
      </MaterialContent>



      <Footer
        buttons={{
          back: {
            children: 'Mudar sabores'
          },
          action: {
            to: CHECKOUT,
            children: 'Finalizar'
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
