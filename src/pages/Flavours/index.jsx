import React from 'react';
import PropTypes from 'prop-types';

const Flavours = ({ location }) => {
  return (
    <h1>Escolha o sabor</h1>
  )
}

Flavours.propTypes = {
  location: PropTypes.object.isRequired
}

export default Flavours;
