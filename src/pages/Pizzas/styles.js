import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MaterialDivider = styled.div`
  margin: 20px 0;
  width: 100%;
`;

export const CardPizzaArea = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  min-width: 250px;

  color: inherit;
  text-decoration: none;
`;

export const Pizza = styled.div`
  border-radius: 50%;
  border: 1px solid #ccc;
  height: 200px;
  width: 200px;
  position: relative;
  background: #fff;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  &::before,
  &::after {
    content: '';
    background: #ccc;
    position: absolute;
    transform: rotate(45deg);
  }

  &::before {
    height: 1px;
    width: 160px;
  }

  &::after {
    height: 160px;
    width: 1px;
  }
`;

export const PizzaText = styled.div`
  font-size: 1.2rem;
  width: 80px;
  height: 80px;
  background: #fff;
  border-radius: 50%;
  position: relative;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const PizzasGrid = styled.div`
  padding: 10px;
`
