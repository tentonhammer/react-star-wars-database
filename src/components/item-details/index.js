import React from 'react';
import './item-details.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorButton from "../error-button";

class ItemDetails extends React.Component {
  swapiService = new SwapiService();
  state = {
    item: null,
    image: null,
    loading: false,
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    this.setState({ loading: true });
    const { itemId, getData, getImage } = this.props;
    if (!itemId) {
      return;
    }
    getData(itemId).then(item => {
      this.setState({ item, image: getImage(item), loading: false });
    });
  }

  render() {
    const { item, loading, image } = this.state;

    if (!item) {
      return <span>Select an item from a list</span>;
    }

    const content = loading ? (
      <Spinner />
    ) : (
      <>
        <img
          className="item-image"
          src={image}
          alt="Character"
        />

        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{item.gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{item.birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{item.eyeColor}</span>
            </li>
          </ul>
          <ErrorButton className='m-lg-1' />
        </div>
      </>
    );

    return <div className="item-details card">{content}</div>;
  }
}

export default ItemDetails;
