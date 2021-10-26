import React from 'react';
import { withData, withSwapiService } from '../hoc-helpers';
import ItemList from '../item-list';
import withChildFunction from '../hoc-helpers/with-child-function';

const mapPersonMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPersons,
  };
};

const mapPlanetMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPlanets,
  };
};

const mapStarshipMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllStarships,
  };
};

const PersonList = withSwapiService(mapPersonMethodsToProps)(
  withData(
    withChildFunction(({ name, eyeColor, birthYear }) => (
      <span>{`${name} (${birthYear}, ${eyeColor})`}</span>
    ))(ItemList)
  )
);
const PlanetList = withSwapiService(mapPlanetMethodsToProps)(
  withData(
    withChildFunction(({ name, population }) => (
      <span>{`${name} (${population})`}</span>
    ))(ItemList)
  )
);
const StarshipList = withSwapiService(mapStarshipMethodsToProps)(
  withData(
    withChildFunction(({ name, model }) => <span>{`${name} (${model})`}</span>)(
      ItemList
    )
  )
);


export {
  PersonList, PlanetList, StarshipList,
};