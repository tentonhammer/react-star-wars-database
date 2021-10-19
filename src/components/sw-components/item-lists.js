import React from 'react';
import { withData, withSwapiService } from '../hoc-helpers';
import ItemList from '../item-list';


const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return <Wrapped {...props}>
      {fn}
    </Wrapped>;
  };
};

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPersons,
  };
};

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets,
  };
};

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships,
  };
};

const PersonList = withSwapiService(withData(withChildFunction(ItemList, ({ name, eyeColor, birthYear }) =>
  <span>{`${name} (${birthYear}, ${eyeColor})`}</span>)), mapPersonMethodsToProps);
const PlanetList = withSwapiService(withData(withChildFunction(ItemList, ({ name, population }) =>
  <span>{`${name} (${population})`}</span>)), mapPlanetMethodsToProps);
const StarshipList = withSwapiService(withData(withChildFunction(ItemList, ({ name, model }) =>
  <span>{`${name} (${model})`}</span>)), mapStarshipMethodsToProps);


export {
  PersonList, PlanetList, StarshipList,
};