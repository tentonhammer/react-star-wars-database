import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import { useState } from 'react';
import './App.scss';

function App() {
  const [active, setActive] = useState(true);
  const [selectedPerson, setSelectedPerson] = useState(5);

  const handleItemSelect = id => {
    setSelectedPerson(id);
    console.log('selected item id', id);
  };

  return (
    <div className="col-md-9 m-auto">
      <Header />
      {active ? <RandomPlanet /> : null}
      <button
        onClick={() => setActive(!active)}
        className="btn btn-warning btn-lg mb-3"
      >
        Toggle Random Planet
      </button>

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={handleItemSelect} />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={selectedPerson} />
        </div>
      </div>
    </div>
  );
}

export default App;
