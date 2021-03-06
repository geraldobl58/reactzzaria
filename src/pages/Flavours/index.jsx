import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { HOME, PIZZA_QUANTITY } from 'routes';

import {
  Typography,
  Grid,
  Card,
  Divider
} from '@material-ui/core';

import singularOrPlural from 'utils/singularOrPlural';

import toMoney from 'utils/toMoney';

import Footer from 'components/Footer';

import { LinearProgress } from '@material-ui/core';

import {
  PizzasGrid,
  Img,
  CardLabel,
  CardTitle,
  MaterialCard,
  Checkbox,
  Title
} from './styles';

import Content from 'components/Content';

import { useCollection } from 'hooks';

const Flavours = ({ location }) => {
  const [checkboxes, setCheckboxes] = useState(() => ({}));

  const pizzaFlavours = useCollection('flavours');

  if (!location.state) {
    return <Redirect to={HOME}  />
  }

  if (!pizzaFlavours) {
    return <LinearProgress />;
  }

  if (pizzaFlavours.length === 0) {
    return 'Não há dados.'
  }

  const { flavours, id } = location.state.pizzaSize;

  const handleChangeCheckbox = (pizzaId) => (e) => {
    if (checkboxChecked(checkboxes).length === flavours
      && e.target.checked === true) {
        return;
    }

    setCheckboxes((checkboxes) => {
      return {
        ...checkboxes,
        [pizzaId]: e.target.checked
      }
    });
  }

  return (
    <React.Fragment>
       <Grid container direction='column' alignItems='center'>
         <Title>
            <Typography variant="h4" gutterBottom>
              Escolha até {flavours} {singularOrPlural(flavours, ' sabor', ' sabores')}
            </Typography>
          </Title>
      </Grid>

      <Content>
        <PizzasGrid>
          <Grid container spacing={6}>
            {pizzaFlavours.map((item) => (
              <Grid item key={item.id} xs>
                <MaterialCard checked={!!checkboxes[item.id]}>
                  <Card>
                    <CardLabel>
                      <Checkbox
                        checked={!!checkboxes[item.id]}
                        onChange={handleChangeCheckbox(item.id)}
                      />

                      <Img src={item.image} alt={item.name} />

                      <Divider />

                      <CardTitle>
                      <Typography>{item.name}</Typography></CardTitle>

                      <Typography variant='h5'>
                        {toMoney(item.value[id])}
                      </Typography>
                    </CardLabel>
                  </Card>
                </MaterialCard>
              </Grid>
            ))}
          </Grid>
        </PizzasGrid>
      </Content>

      <Footer
        buttons={{
          back: {
            children: 'Mudar tamanho'
          },
          action: {
            to: {
              pathname: PIZZA_QUANTITY,
              state: {
                ...location.state,
                pizzaFlavours: getFlavoursNameAndId({
                  checkboxes,
                  pizzaFlavours
                })
              }
            },
            children: 'Quantas pizzas?',
            disabled: checkboxChecked(checkboxes).length === 0
          }
        }}
      />
    </React.Fragment>
  )
}

Flavours.propTypes = {
  location: PropTypes.object.isRequired
}

function checkboxChecked(checkboxes) {
  return Object.values(checkboxes).filter(Boolean);
}

function getFlavoursNameAndId({ checkboxes, pizzaFlavours }) {
  return Object.entries(checkboxes)
    .filter(([, value]) => !!value)
    .map(([id]) => ({
      id,
      name: pizzaFlavours.find((flavour) => flavour.id === id).name
    }));
}

export default Flavours;
