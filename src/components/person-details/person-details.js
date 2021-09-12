import React from 'react';
import './person-details.css';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const PersonDetails = () => (
  <div className="person-details card">
    <img
      className="person-image"
      src={swapiService.getImage(3, 'characters')}
      alt="Person details"
    />

    <div className="card-body">
      <h4>R2-D2</h4>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <span className="term">Gender</span>
          <span>male</span>
        </li>
        <li className="list-group-item">
          <span className="term">Birth Year</span>
          <span>43</span>
        </li>
        <li className="list-group-item">
          <span className="term">Eye Color</span>
          <span>red</span>
        </li>
      </ul>
    </div>
  </div>
);

export default PersonDetails;
