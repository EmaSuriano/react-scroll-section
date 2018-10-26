import React from 'react';

const { Consumer, Provider } = React.createContext();

const withScrollingConsumer = Component => props => (
  <Consumer>{data => <Component {...data} {...props} />}</Consumer>
);

export { Consumer, Provider, withScrollingConsumer };
