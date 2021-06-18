import React from 'react';

import TextField from 'components/TextField';

import { Grid } from '@material-ui/core';

function FormAddress() {
  return (
    <Grid container spacing={2}>
      <TextField label='CEP' xs={4} autoFocus />
      <Grid item xs={8} />
      <TextField label='Rua' xs={9} />
      <TextField label='Número' xs={3} />
      <TextField label='Complemento' xs={12} />
      <TextField label='Cidade' xs={9} />
      <TextField label='Estado' xs={3} />
    </Grid>
  )
}

export default FormAddress;