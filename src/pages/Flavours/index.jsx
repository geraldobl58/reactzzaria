import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { HOME } from 'routes';

import { Typography, Grid, Card, Divider, Container } from '@material-ui/core';

import singularOrPlural from 'utils/singularOrPlural';
import toMoney from 'utils/toMoney';

import {
  PizzasGrid,
  Img,
  CardLabel,
  CardTitle,
  MaterialCard,
  Checkbox,
  Footer,
  Content,
  Title
} from './styles';

import pizzaFlavours from 'data/flavours';

const Flavours = ({ location }) => {
  const [checkboxes, setCheckboxes] = useState(() => ({}));

  if (!location.state) {
    return <Redirect to={HOME}  />
  }

  const { flavours, id } = location.state;

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

      <Footer>
        <Container>
          Footer
        </Container>
      </Footer>
    </React.Fragment>
  )
}

Flavours.propTypes = {
  location: PropTypes.object.isRequired
}

function checkboxChecked(checkboxes) {
  return Object.values(checkboxes).filter(Boolean);
}

export default Flavours;
