import styled from 'styled-components';

export const Title = styled.div`
  padding: 80px 20px 20px;
`

export const MaterialInput = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(2)}px;

  input {
    font-size: 80px;
    padding: 10px;
    text-align: center;
    width: 150px;
  }
`
