import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@material-ui/core';

import { Main } from './styles';

const Content = ({ children, ...props }) => (
  <Container>
    <Main {...props}>
      {children}
    </Main>
  </Container>
)

Content.propTypes = {
  children: PropTypes.node.isRequired
}

export default Content;
