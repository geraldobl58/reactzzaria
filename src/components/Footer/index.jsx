import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Typography,
  Grid,
  Container,
  Button
} from '@material-ui/core';

import { useAuth } from 'hooks';

import singularOrPlural from 'utils/singularOrPlural';

import { FooterContainer, OrderContainer, Buttons } from './styles';

function Footer({ buttons, history, location }) {
  const { userInfo } = useAuth();

  const { pizzaSize, pizzaFlavours } = location.state;
  const { name, slices, flavours } = pizzaSize;

  return (
    <FooterContainer>
      <Container>
        <Grid container>
            <OrderContainer>
              <Grid item>
                <Typography><b>{userInfo.user.displayName}</b> seu pedido é:</Typography>
                <Typography>
                  Pizza <b>{name.toUpperCase()}</b> -
                  ({slices} {singularOrPlural(slices, 'fatia', 'fatias')}, {' '}
                  {flavours} {singularOrPlural(flavours, 'sabor', 'sabores')})
                </Typography>

                {pizzaFlavours && (
                  <Typography>
                    {singularOrPlural(pizzaFlavours.length, 'no sabor', 'nos sabores')}{' '}
                    <b>{pizzaFlavours.map(({ name }) => name).join(', ')}</b>
                  </Typography>
                )}
              </Grid>
            </OrderContainer>
            <Grid item>
              <Buttons>
                <Button
                  {...buttons.back}
                  component='a'
                  variant="contained"
                  onClick={(e) => {
                    e.preventDefault();
                    history.goBack();
                  }}
                />

                <Button
                  {...buttons.action}
                  component={Link}
                  variant="contained"
                  color='primary'
                />
              </Buttons>
            </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  )
}

Footer.propTypes = {
  buttons: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
}

export default withRouter(Footer);
