import styled from 'styled-components';

export const Content = styled.main`
  padding: 80px 20px 20px;
  flex-grow: 1;
`
export const Title = styled.div`
  text-align: left;
`

export const PaperContainer = styled.div`
  padding: ${({ theme }) => theme.spacing(2)}px;
  flex-grow: 1;
`
