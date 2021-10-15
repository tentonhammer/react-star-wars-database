import { ItemDetails, Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const StarshipDetails = ({ itemId, swapiService }) => {
  const { getStarship, getStarshipImage } = swapiService;
  return <ItemDetails itemId={itemId} getData={getStarship} getImage={getStarshipImage}>
    <Record field='model' label='Model' />
    <Record field='length' label='Length' />
    <Record field='manufacturer' label='Manufacturer' />
  </ItemDetails>;
};

export default withSwapiService(StarshipDetails);