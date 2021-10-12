import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './App.scss';
import ItemDetails, { Record } from '../item-details';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import { PersonDetails, PersonList, PlanetDetails, PlanetList, StarshipDetails, StarshipList } from '../sw-components';

class App extends Component {
  state = {
    showRandomPlanet: true,
  };

  swapiService = new SwapiService();

  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet,
      };
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;
    const { getPerson, getStarship, getStarshipImage, getPersonImage } = this.swapiService;

    const itemDetails = <ItemDetails itemId={11} getData={getPerson} getImage={getPersonImage}>
      <Record field='gender' label='Gender' />
      <Record field='eyeColor' label='Eye Color' />
    </ItemDetails>;
    const starshipDetails = <ItemDetails itemId={5} getData={getStarship} getImage={getStarshipImage}>
      <Record field='model' label='Model' />
      <Record field='length' label='Length' />
      <Record field='costInCredits' label='Cost' />
    </ItemDetails>;

    return (
      <ErrorBoundry>
        <div className='col-md-9 m-auto'>
          <Header />
          {/*{planet}
        <button
          onClick={this.toggleRandomPlanet}
          className="btn btn-warning btn-lg mb-3"
        >
          Toggle Random Planet
        </button>
        <ErrorButton className='ml-1' />*/}
          {/*<PeoplePage />*/}
          {/*<div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.handleItemSelect} getData={this.swapiService.getAllPlanets} renderItem={(item) => item.name} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.handleItemSelect} getData={this.swapiService.getAllStarships} renderItem={(item) => item.name} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>*/}
          <Row left={starshipDetails} right={itemDetails} />
          <PersonList>
            {({name}) => <span>{name}</span>}
          </PersonList>
          <StarshipList>
            {({name}) => <span>{name}</span>}
          </StarshipList>
          <PlanetList>
            {({name}) => <span>{name}</span>}
          </PlanetList>
          <PersonDetails itemId={11} />
          <PlanetDetails itemId={11} />
          <StarshipDetails itemId={11} />
        </div>
      </ErrorBoundry>
    );
  }
}

export default App;
