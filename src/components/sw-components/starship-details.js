import { ItemDetails, Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const StarshipDetails = (props) => {
  return <ItemDetails {...props}>
    <Record field='model' label='Model' />
    <Record field='length' label='Length' />
    <Record field='manufacturer' label='Manufacturer' />
  </ItemDetails>;
};

const mapMethodsToProps = (swapiService) => {
  return { getData: swapiService.getStarship, getImage: swapiService.getStarshipImage };
};

export default withSwapiService(mapMethodsToProps)(StarshipDetails);