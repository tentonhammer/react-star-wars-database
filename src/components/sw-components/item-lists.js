import React from 'react';
import SwapiService from '../../services/swapi-service';
import { withData } from '../hoc-helpers';
import ItemList from '../item-list';

const swapiService = new SwapiService();

const { getAllPersons, getAllPlanets, getAllStarships } = swapiService;

const withChildFunction = (Wrapped, fn) => {
  return (props) => {
    return <Wrapped {...props}>
      {fn}
    </Wrapped>;
  };
};

const PersonList = withData(withChildFunction(ItemList, ({ name, eyeColor, birthYear }) =>
  <span>{`${name} (${birthYear}, ${eyeColor})`}</span>), getAllPersons);
const PlanetList = withData(withChildFunction(ItemList, ({ name, population }) =>
  <span>{`${name} (${population})`}</span>), getAllPlanets);
const StarshipList = withData(withChildFunction(ItemList, ({ name, model }) =>
  <span>{`${name} (${model})`}</span>), getAllStarships);


export {
  PersonList, PlanetList, StarshipList,
};