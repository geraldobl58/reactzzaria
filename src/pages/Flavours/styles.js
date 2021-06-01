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
  border-color: ${({ checked }) => checked ? '#000' : ''};
`

export const Checkbox = styled.input.attrs({
  type: 'checkbox'
})`
  display: none;
`
