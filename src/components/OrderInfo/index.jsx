import React from 'react';
import PropTypes from 'prop-types';

import { useOrder } from 'hooks';

import singularOrPlural from 'utils/singularOrPlural';

import {
  Typography,
  List,
  IconButton
} from '@material-ui/core';

import { Close } from '@material-ui/icons';

import { MaterialList } from './styles';

function OrderInfo({ showOptions }) {
  const { order } = useOrder();

  return (
    <List>
      {order.pizzas.map((pizza, index) => {
        const { pizzaFlavours, pizzaSize, quantity } = pizza;
        const { name, slices, flavours } = pizzaSize;

        return (
          <MaterialList key={index}>
            <Typography>
              <b>{quantity}</b> {' '}
              {singularOrPlural(quantity, 'pizza', 'pizzas')} {' '}
              <b>{name.toUpperCase()}</b> -
              ({slices} {singularOrPlural(slices, 'fatia', 'fatias')}, {' '}
              {flavours} {singularOrPlural(flavours, 'sabor', 'sabores')})

              <br />

              {singularOrPlural(pizzaFlavours.length, 'no sabor', 'nos sabores')}{' '}
              <b>{pizzaFlavours.map(({ name }) => name).join(', ')}</b>
            </Typography>

            {showOptions && (
              <IconButton title="Remover" color="secondary">
                <Close />
              </IconButton>
            )}
          </MaterialList>
        )
      })}
    </List>
  )
}

OrderInfo.propTypes = {
  showOptions: PropTypes.bool
}

export default OrderInfo;
