import React from 'react';
import './item-details.scss';
import ErrorButton from '../error-button';

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

class ItemDetails extends React.Component {
  state = {
    item: null,
    image: null,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.itemId !== prevProps.itemId || this.props.getData !== prevProps.getData || this.props.getImage !== prevProps.getImage) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImage } = this.props;
    if (!itemId) {
      return;
    }
    getData(itemId).then(item => {
      this.setState({ item, image: getImage(item) });
    });
  }

  render() {
    const { item, image } = this.state;

    if (!item) {
      return <span>Select an item from a list</span>;
    }

    return (
      <div className="item-details card">
        <img className="item-image" src={image} alt="Character" />
        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, (child, index) => {
              return React.cloneElement(child, { item });
            })}
          </ul>
          <ErrorButton className="m-lg-1" />
        </div>
      </div>
    );
  }
}

export { Record, ItemDetails };
