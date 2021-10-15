import { SwapiServiceConsumer } from '../../context/swapi-service-context';

const withSwapiService = (Wrapped) => {
  return (props) => <SwapiServiceConsumer>
    {(swapiService) => {
      return <Wrapped {...props} swapiService={swapiService} />;
    }}
  </SwapiServiceConsumer>;
};

export default withSwapiService;