import React, { createContext } from 'react';
import PropTypes from 'prop-types';

const OrderContext = createContext();

function OrderProvider({ children }) {
  function addPizzaToOrder(pizza) {
    console.log('Pizza order:', pizza);
  }

  return (
    <OrderContext.Provider value={{ addPizzaToOrder }}>
      {children}
    </OrderContext.Provider>
  )
}

OrderProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { OrderProvider, OrderContext };
