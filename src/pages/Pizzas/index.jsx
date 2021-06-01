import React, { useContext } from 'react';

import {
  Typography,
  Grid,
  Paper,
  Divider
 } from '@material-ui/core';

 import {
  PaperPizza,
  MaterialDivider,
  Pizza,
  PizzaText,
  PizzasGrid
} from './styles';

import { AuthContext } from 'contexts/auth';

import pizzaSizes from 'data'

const Pizzas = () => {
  const { userInfo } = useContext(AuthContext);

  return (
    <React.Fragment>
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
                <PaperPizza>
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
                </PaperPizza>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </PizzasGrid>
    </React.Fragment>
  )
}

function singularOrPlural(amount, singular, plural) {
  return amount === 1 ? singular : plural;
}

export default Pizzas;