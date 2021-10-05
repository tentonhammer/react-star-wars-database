import { Component } from 'react';
import Spinner from '../spinner';
import './item-list.css';

class ItemList extends Component {
  state = {
    itemList: null,
  };

  componentDidMount() {
    const { getData } = this.props;
    getData().then(itemList => {
      this.setState({ itemList });
    });
  }

  renderItems = () => {
    const { itemList } = this.state;

    return itemList.map(person => {
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
    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />;
    }

    const items = this.renderItems();

    return <ul className="item-list list-group">{items}</ul>;
  }
}

export default ItemList;
