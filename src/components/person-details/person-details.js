import React from 'react';
import './person-details.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

class PersonDetails extends React.Component {
  swapiService = new SwapiService();
  state = {
    person: null,
    loading: true,
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    this.setState({ loading: true });
    const { personId } = this.props;
    if (!personId) {
      return;
    }
    this.swapiService.getPerson(personId).then(person => {
      this.setState({ person, loading: false });
    });
  }

  render() {
    const { person, loading } = this.state;

    // if (!person) {
    //   return <Spinner />;
    // }

    const content = loading ? (
      <Spinner />
    ) : (
      <>
        <img
          className="person-image"
          src={this.swapiService.getImage(person.id, 'characters')}
          alt="Character"
        />

        <div className="card-body">
          <h4>{person.name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{person.gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{person.birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{person.eyeColor}</span>
            </li>
          </ul>
        </div>
      </>
    );

    return <div className="person-details card">{content}</div>;
  }
}

export default PersonDetails;
