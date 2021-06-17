import styled from 'styled-components';

import { Divider } from '@material-ui/core';

export const Title = styled.div`
  text-align: center;
`

export const PaperContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(3)}px;
`

export const MaterialDivider = styled(Divider)`
  margin: ${({ theme }) => theme.spacing(3, 0)};
`
