import SwapiService from '../../services/swapi-service';
import ItemDetails, { Record } from '../item-details';
import React from 'react';

const swapiService = new SwapiService();

const { getPerson, getPlanet, getStarship, getPersonImage, getPlanetImage, getStarshipImage } = swapiService;

const PersonDetails = ({itemId}) => {
  return (
    <ItemDetails itemId={itemId} getData={getPerson} getImage={getPersonImage}>
      <Record field='gender' label='Gender' />
      <Record field='eyeColor' label='Eye Color' />
      <Record field='birthYear' label='Birth Year' />
    </ItemDetails>
  )
};
const PlanetDetails = ({itemId}) => {
  return (<ItemDetails itemId={itemId} getData={getPlanet} getImage={getPlanetImage}>
    <Record field='population' label='Population' />
    <Record field='diameter' label='Diameter' />
    <Record field='period' label='Period' />
  </ItemDetails>)
};
const StarshipDetails = ({itemId}) => {
  return (<ItemDetails itemId={itemId} getData={getStarship} getImage={getStarshipImage}>
    <Record field='model' label='Model' />
    <Record field='length' label='Length' />
    <Record field='manufacturer' label='Manufacturer' />
  </ItemDetails>)
};

export {
  PersonDetails, PlanetDetails, StarshipDetails,
};