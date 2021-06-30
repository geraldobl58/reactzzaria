import React, { useState, useEffect } from 'react';

import { FLAVOURS } from 'routes';

import {
  Typography,
  Grid,
  Paper,
  Divider,
  Card,
  CardActionArea
} from '@material-ui/core';

import { useAuth } from 'hooks';

import Content from 'components/Content';

import {
  CardPizzaArea,
  MaterialDivider,
  Pizza,
  PizzaText,
  PizzasGrid
} from './styles';

import singularOrPlural from 'utils/singularOrPlural';

import { db } from 'services/firebase';

const Pizzas = () => {
  const [pizzasSizes, setSizzasSizes] = useState([]);
  const { userInfo } = useAuth();

  useEffect(() => {
    db.collection('sizes').get().then(querySnapshot => {
      let sizes = [];
      querySnapshot.forEach(doc => {
        sizes.push({
          id: doc.id,
          ...doc.data()
        });
      });
      setSizzasSizes(sizes);
    });
  }, []);

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
          {pizzasSizes.map((item) => (
            <Grid item key={item.id} xs>
              <Paper>
                <Card>
                  <CardActionArea>
                    <CardPizzaArea to={{
                      pathname: FLAVOURS,
                      state: {
                          pizzaSize: item
                        }
                      }}
                    >
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
