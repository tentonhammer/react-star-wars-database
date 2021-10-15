import { ItemDetails, Record } from '../item-details';
import { withSwapiService } from '../hoc-helpers';

const PlanetDetails = ({ itemId, swapiService }) => {
  const { getPlanet, getPlanetImage } = swapiService;
  return <ItemDetails itemId={itemId} getData={getPlanet} getImage={getPlanetImage}>
    <Record field='population' label='Population' />
    <Record field='diameter' label='Diameter' />
    <Record field='period' label='Period' />
  </ItemDetails>;
};

export default withSwapiService(PlanetDetails);