import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { HOME } from 'routes';

import { Typography, Grid, Card, Divider } from '@material-ui/core';

import singularOrPlural from 'utils/singularOrPlural';

import { PizzasGrid, Img } from './styles';

import pizzaFlavours from 'data/flavours';

const Flavours = ({ location }) => {
  if (!location.state) {
    return <Redirect to={HOME}  />
  }

  const { flavours, id } = location.state;

  return (
    <React.Fragment>
       <Grid container direction='column' alignItems='center'>
        <Typography variant="h4" gutterBottom>
          Escolha até {flavours} {singularOrPlural(flavours, ' sabor', ' sabores')}
        </Typography>
      </Grid>

      <PizzasGrid>
        <Grid container spacing={6}>
          {pizzaFlavours.map((item) => (
            <Grid item key={item.id} xs>
                <Card>
                  <Img src={item.image} alt={item.name} />

                  <Divider />

                  <Typography>{item.name}</Typography>
                  <Typography variant='h5'>{item.value[id]}</Typography>
                </Card>
            </Grid>
          ))}
        </Grid>
      </PizzasGrid>
    </React.Fragment>
  )
}

Flavours.propTypes = {
  location: PropTypes.object.isRequired
}

export default Flavours;
