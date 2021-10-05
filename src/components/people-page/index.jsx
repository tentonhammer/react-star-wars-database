import React from 'react';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from "../../services/swapi-service";

export default class PeoplePage extends React.Component {
  state = {
    selectedPerson: 5,
    hasError: false,
  };

  swapiService = new SwapiService();

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
  }

  handleItemSelect = id => {
    this.setState({ selectedPerson: id });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    const { selectedPerson } = this.state;
    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.handleItemSelect} getData={this.swapiService.getAllPersons} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={selectedPerson} />
        </div>
      </div>
    );
  }
}
