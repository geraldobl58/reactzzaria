import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@material-ui/core';

import { FooterContainer} from './styles';
import FooterOrder from 'components/FooterOrder';

const Footer = ({ children, ...props }) => {
  return (
    <FooterContainer>
      <Container>
        {children || <FooterOrder {...props} />}
      </Container>
    </FooterContainer>
  )
}

Footer.propTypes = {
  children: PropTypes.node
}

export default Footer;
