import React from 'react';
import PropTypes from 'prop-types';

import Footer from 'components/Footer';

import { FooterContainer } from './styles';

function FooterCheckout({ children, justifyContent }) {
  return (
    <Footer>
      <FooterContainer justifyContent={justifyContent}>
        {children}
      </FooterContainer>
    </Footer>
  )
}

FooterCheckout.propTypes = {
  children: PropTypes.node.isRequired,
  justifyContent: PropTypes.string
}

export default FooterCheckout;
