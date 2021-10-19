import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import { PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList } from '../sw-components';
import './App.scss';
import { SwapiServiceProvider } from '../../context/swapi-service-context';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

class App extends Component {
  state = {
    showRandomPlanet: true,
    swapiService: new SwapiService()
  };

  onServiceChange = () => {
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      return {
        swapiService: new Service()
      }
    });
  }

  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className='col-md-9 m-auto'>
            <Header onServiceChange={this.onServiceChange} />
            {planet}
            <button
              onClick={this.toggleRandomPlanet}
              className='btn btn-warning btn-lg mb-3'
            >
              Toggle Random Planet
            </button>

            <Row left={<PersonList />} right={<PersonDetails itemId={11} />} />
            <Row left={<PlanetList />} right={<PlanetDetails itemId={11} />} />
            <Row left={<StarshipList />} right={<StarshipDetails itemId={11} />} />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}

export default App;
