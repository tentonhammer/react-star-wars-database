import React from 'react';
import { SwapiServiceConsumer } from '../../context/swapi-service-context';
import ItemDetails, { Record } from '../item-details';

const PersonDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {({ getPerson, getPersonImage }) => {
        return <ItemDetails itemId={itemId} getData={getPerson} getImage={getPersonImage}>
          <Record field='gender' label='Gender' />
          <Record field='eyeColor' label='Eye Color' />
          <Record field='birthYear' label='Birth Year' />
        </ItemDetails>;
      }}
    </SwapiServiceConsumer>
  );
};
const PlanetDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {({ getPlanet, getPlanetImage }) => {
        return <ItemDetails itemId={itemId} getData={getPlanet} getImage={getPlanetImage}>
          <Record field='population' label='Population' />
          <Record field='diameter' label='Diameter' />
          <Record field='period' label='Period' />
        </ItemDetails>;
      }}
    </SwapiServiceConsumer>);
};
const StarshipDetails = ({ itemId }) => {
  return (
    <SwapiServiceConsumer>
      {({ getStarship, getStarshipImage }) => {
        return <ItemDetails itemId={itemId} getData={getStarship} getImage={getStarshipImage}>
          <Record field='model' label='Model' />
          <Record field='length' label='Length' />
          <Record field='manufacturer' label='Manufacturer' />
        </ItemDetails>;
      }}
    </SwapiServiceConsumer>
    );
};

export {
  PersonDetails, PlanetDetails, StarshipDetails,
};