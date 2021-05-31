import React, { useContext } from 'react';

import {
  Typography,
  Grid,
  Paper,
  Divider,
  withStyles,
 } from '@material-ui/core';

import { AuthContext } from 'contexts/auth';

import {
  Content,
  PaperPizza,
  MaterialDivider,
  Pizza,
  PizzaText,
  PizzasGrid
} from './styles';

import Header from 'components/Header';

const Main = () => {
  const { userInfo } = useContext(AuthContext);

  return (
    <React.Fragment>

      <Header />

      <Spacer />

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
      </Content>
    </React.Fragment>
  )
}

function singularOrPlural(amount, singular, plural) {
  return amount === 1 ? singular : plural;
}

const pizzaSizes = [
  {
    id: 1,
    name: 'Pequena',
    size: 28,
    slices: 2,
    flavours: 1
  },
  {
    id: 2,
    name: 'Média',
    size: 30,
    slices: 6,
    flavours: 2
  },
  {
    id: 3,
    name: 'Grande',
    size: 32,
    slices: 8,
    flavours: 3
  }
]

const style = (theme) => ({
  main: theme.mixins.toolbar
});

const Spacer = withStyles(style)(({ classes }) => (
  <div className={classes.main} />
));

export default Main
