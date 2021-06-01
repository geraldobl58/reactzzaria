import styled from 'styled-components';

import { ReactComponent as MainLogo } from '../../images/logo-react-zzaria.svg';

export const LogoContainer = styled.div`
  flex-grow: 1;
`

export const Logo = styled(MainLogo)`
  width: 200px;
  height: 50px;

  & path {
    fill: ${({ theme }) => theme.palette.common.white};
  }

  & line {
    stroke: ${({ theme }) => theme.palette.common.white};
  }

`;

export const MaterialToolbar = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
  width: 100%;
  margin: 0 auto;
`
