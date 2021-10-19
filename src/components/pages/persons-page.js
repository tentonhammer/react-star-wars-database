import React, { Component } from 'react';
import Row from '../row';
import { PersonDetails, PersonList } from '../sw-components';

export default class PersonsPage extends Component {
  state = {
    selectedItem: null,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <div>
        <Row left={<PersonList onItemSelected={this.onItemSelected} />}
             right={<PersonDetails itemId={selectedItem} />} />
      </div>
    );
  }
}