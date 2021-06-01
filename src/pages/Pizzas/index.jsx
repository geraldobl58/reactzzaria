import React, { useContext } from 'react';

import { FLAVOURS } from 'routes';

import {
  Typography,
  Grid,
  Paper,
  Divider,
  Card,
  CardActionArea
} from '@material-ui/core';

import { AuthContext } from 'contexts/auth';

import pizzaSizes from 'data/sizes'

import {
  Content,
  CardPizzaArea,
  MaterialDivider,
  Pizza,
  PizzaText,
  PizzasGrid
} from './styles';

import singularOrPlural from 'utils/singularOrPlural';

const Pizzas = () => {
  const { userInfo } = useContext(AuthContext);

  return (
    <Content>
      <Grid container direction='column' alignItems='center'>
        <Typography variant="h3" gutterBottom>
          O que vai ser hoje, {userInfo.user.firstName}?
        </Typography>
        <Typography variant="h4" gutterBottom>
          Escolha o tamanho da pizza:
        </Typography>
      </Grid>

      <PizzasGrid>
        <Grid container spacing={6}>
          {pizzaSizes.map((item) => (
            <Grid item key={item.id} xs>
              <Paper>
                <Card>
                  <CardActionArea>
                    <CardPizzaArea to={{ pathname: FLAVOURS, state: item }}>
                      <Pizza>
                        <PizzaText>{item.size}cm</PizzaText>
                      </Pizza>

                      <MaterialDivider>
                        <Divider />
                      </MaterialDivider>

                      <Typography variant='h5'>{item.name}</Typography>

                      <Typography>
                        {item.slices} fatias, {item.flavours}
                        {singularOrPlural(item.flavours, ' sabor', ' sabores')}
                      </Typography>
                    </CardPizzaArea>
                  </CardActionArea>
                </Card>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </PizzasGrid>
    </Content>
  )
}

export default Pizzas;
