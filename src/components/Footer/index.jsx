import React from 'react';
import { withRouter ,Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { HOME, PIZZA_QUANTITY } from 'routes';

import {
  Typography,
  Grid,
  Container,
  Button
} from '@material-ui/core';

import { useAuth } from 'hooks';

import singularOrPlural from 'utils/singularOrPlural';

import {
  FooterContainer,
  OrderContainer,
  Buttons
} from './styles';

function Footer({ location }) {
  const { userInfo } = useAuth();

  const { name, slices, flavours } = location.state;

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
              </Grid>
            </OrderContainer>
            <Grid item>
              <Buttons>
                <Link to={HOME}>
                  <Button
                    variant='contained'
                    style={{ marginRight: 10 }}
                  >
                    Mudar tamanho
                  </Button>
                </Link>
                <Link to={PIZZA_QUANTITY}>
                  <Button
                    variant='contained'
                    color='primary'
                  >
                    Quantas pizzas?
                  </Button>
                </Link>
              </Buttons>
            </Grid>
        </Grid>
      </Container>
    </FooterContainer>
  )
}

Footer.propTypes = {
  location: PropTypes.object.isRequired
}

export default withRouter(Footer);
