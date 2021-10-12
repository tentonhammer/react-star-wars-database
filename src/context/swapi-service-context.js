import React from 'react';

const {Provider: SwapiServiceProvider, Consumer: SwapiServiceConsumer} = React.createContext(1);

export {
  SwapiServiceProvider, SwapiServiceConsumer
}