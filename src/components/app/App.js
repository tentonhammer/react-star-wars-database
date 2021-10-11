import React, { Component, useState } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import './App.scss';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';
import ItemList from "../item-list";
import PersonDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import ErrorBoundry from "../error-boundry";
import Row from "../row";
import ItemDetails from "../item-details";

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
    const {getPerson, getStarship, getStarshipImage, getPersonImage} = this.swapiService;

    const itemDetails = <ItemDetails itemId={11} getData={getPerson} getImage={getPersonImage} />;
    const starshipDetails = <ItemDetails itemId={5} getData={getStarship} getImage={getStarshipImage} />;

    return (
      <ErrorBoundry>
        <div className="col-md-9 m-auto">
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
        </div>
      </ErrorBoundry>
    );
  }
}

export default App;
