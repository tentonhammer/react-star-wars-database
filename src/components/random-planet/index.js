import React from 'react';
import './random-planet.scss';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

export default class RandomPlanet extends React.Component {
  state = {
    planet: {},
    loading: true,
    error: false,
  };

  swapiService = new SwapiService();

  componentDidMount() {
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = planet => {
    this.setState(() => {
      return {
        planet: planet,
        loading: false,
        error: false,
      };
    });
  };

  onError = error => {
    this.setState({
      error: true,
      loading: false,
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25 + 3);
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;
    const hasData = !(loading || error);
    const errorIndicator = error ? <ErrorIndicator /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;
    return (
      <div
        className={`random-planet jumbotron rounded ${
          !hasData ? 'justify-content-center' : ''
        }`}
      >
        {errorIndicator}
        {spinner}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ planet }) => {
  const swapiService = new SwapiService();
  const { id, name, population, period, diameter } = planet;
  return (
    <React.Fragment>
      <img
        className="planet-image"
        src={swapiService.getImage(id, 'planets')}
        alt="Planet"
      />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{period}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
