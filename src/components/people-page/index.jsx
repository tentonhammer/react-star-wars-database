import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import ItemList from '../item-list';
import PersonDetails from '../item-details';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

export default class PeoplePage extends Component {
  state = {
    selectedPerson: 5,
  };

  swapiService = new SwapiService();

  handleItemSelect = id => {
    this.setState({ selectedPerson: id });
  };

  render() {
    const { selectedPerson } = this.state;

    const itemList = (
      <ItemList
        onItemSelected={this.handleItemSelect}
        getData={this.swapiService.getAllPersons}
      >
        {i => `${i.name} (${i.birthYear})`}
      </ItemList>
    );
    const personDetails = (
      <ErrorBoundry>
        <PersonDetails itemId={selectedPerson} />
      </ErrorBoundry>
    );
    return <Row left={itemList} right={personDetails} />;
  }
}
