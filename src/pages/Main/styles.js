import styled from 'styled-components';

import { ReactComponent as MainLogo } from '../../images/logo-react-zzaria.svg';

export const LogoContainer = styled.div`
  flex-grow: 1;
`

export const Logo = styled(MainLogo)`
  width: 200px;
  height: 50px;

  & path {
    fill: #fff;
  }

  & line {
    stroke: #fff;
  }

`;

export const MaterialToolbar = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
`
