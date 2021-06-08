import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(3)}px;
  box-shadow: 0 0 30px ${({ theme }) => theme.palette.grey[400]};
`

export const OrderContainer = styled.div`
  flex-grow: 1;
`
export const Buttons = styled.div`
  a {
    text-decoration: none;
  }
`
