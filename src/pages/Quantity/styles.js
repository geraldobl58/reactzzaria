import styled from 'styled-components';

export const Title = styled.div`
  padding: 80px 20px 20px;
`

export const MaterialContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(2)}px;

  input {
    font-size: 80px;
    padding: 10px;
    text-align: center;
    width: 150px;
  }

  button {
    margin-top: ${({ theme }) => theme.spacing(2)}px;
  }
`
