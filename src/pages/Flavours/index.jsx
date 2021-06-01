import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { HOME } from 'routes';

import { Typography, Grid } from '@material-ui/core';

import singularOrPlural from 'utils/singularOrPlural';

const Flavours = ({ location }) => {
  if (!location.state) {
    return <Redirect to={HOME}  />
  }

  const { flavours } = location.state;

  return (
    <React.Fragment>
       <Grid container direction='column' alignItems='center'>
        <Typography variant="h4" gutterBottom>
          Escolha até {flavours} {singularOrPlural(flavours, ' sabor', ' sabores')}
        </Typography>
      </Grid>
    </React.Fragment>
  )
}

Flavours.propTypes = {
  location: PropTypes.object.isRequired
}

export default Flavours;
