import { ItemDetails, Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const PlanetDetails = (props) => {
  return <ItemDetails {...props}>
    <Record field='population' label='Population' />
    <Record field='diameter' label='Diameter' />
    <Record field='period' label='Period' />
  </ItemDetails>;
};

const mapMethodsToProps = (swapiService) => {
  return { getData: swapiService.getPlanet, getImage: swapiService.getPlanetImage };
};

export default withSwapiService(PlanetDetails, mapMethodsToProps);