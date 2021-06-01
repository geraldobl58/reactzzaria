import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { HOME } from 'routes';

import { Typography, Grid, Card, Divider } from '@material-ui/core';

import singularOrPlural from 'utils/singularOrPlural';

import { PizzasGrid, Img, CardLabel, CardTitle } from './styles';

import pizzaFlavours from 'data/flavours';

const Flavours = ({ location }) => {
  const [checkboxes, setCheckboxes] = useState(() => ({}));

  console.log('CHECKBOX', checkboxes);

  if (!location.state) {
    return <Redirect to={HOME}  />
  }

  const { flavours, id } = location.state;

  const handleChangeCheckbox = (pizzaId) => (e) => {
    setCheckboxes((checkboxes) => {
      return {
        ...checkboxes,
        [pizzaId]: !checkboxes[pizzaId]
      }
    });
  }

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
                  <CardLabel>
                    <input
                      type="checkbox"
                      checked={!!checkboxes[item.id]}
                      onChange={handleChangeCheckbox(item.id)}
                    />

                    <Img src={item.image} alt={item.name} />

                    <Divider />

                    <CardTitle>
                    <Typography>{item.name}</Typography></CardTitle>

                    <Typography variant='h5'>{item.value[id]}</Typography>
                  </CardLabel>
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
