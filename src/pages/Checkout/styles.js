import styled from 'styled-components';

import { Paper, TextField } from '@material-ui/core';

export const Title = styled.div`
  text-align: left;
`

export const PaperContainer  = styled(Paper)`
  padding: ${({ theme }) => theme.spacing(2)}px;
  margin-bottom: ${({ theme }) => theme.spacing(5)}px;
  flex-grow: 1;
`

export const MaterialTextField = styled(TextField)``
