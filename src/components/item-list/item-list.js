import './item-list.css';
import { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personList: null,
    };
    this.swapi = new SwapiService();
  }

  componentDidMount() {
    this.swapi.getAllPersons().then(personList => {
      this.setState({ personList });
    });
  }

  renderItems = () => {
    const { personList } = this.state;

    return personList.map(person => {
      const { id, name } = person;
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {name}
        </li>
      );
    });
  };

  render() {
    const { personList } = this.state;

    if (!personList) {
      return <Spinner />;
    }

    const items = this.renderItems();

    return <ul className="item-list list-group">{items}</ul>;
  }
}

export default ItemList;
