import React from 'react';

const { Consumer, Provider } = React.createContext();

const withScrollingConsumer = (Component) => {
  const Wrapper = (props) => (
    <Consumer>{(data) => <Component {...data} {...props} />}</Consumer>
  );

  Wrapper.displayName = `withScrollingConsumer(${Component.displayName})`;

  return Wrapper;
};

export { Consumer, Provider, withScrollingConsumer };
