import styled from 'styled-components';

export const PizzasGrid = styled.div`
  padding: 10px;
`
export const Img = styled.img`
  width: 200px;
`

export const CardLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  min-width: 250px;

  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;

export const CardTitle = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 10px;
  border-bottom: 1px solid #ccc;
`

export const MaterialCard = styled.div`
  border: 2px solid transparent;
  border-radius: 5px;
  border-color: ${({
    checked, theme }) => checked ? theme.palette.secondary.light : ''};
`

export const Checkbox = styled.input.attrs({
  type: 'checkbox'
})`
  display: none;
`

export const Footer = styled.footer`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(3)}px;
  box-shadow: 0 0 30px ${({ theme }) => theme.palette.grey[400]};
`

export const Content = styled.main`
  padding: 80px 20px 20px;
  flex-grow: 1;
`

export const Title = styled.div`
  padding: 80px 20px 20px;
`

export const OrderContainer = styled.div`
  flex-grow: 1;
`
export const Buttons = styled.div`
  a {
    text-decoration: none;
  }
`
