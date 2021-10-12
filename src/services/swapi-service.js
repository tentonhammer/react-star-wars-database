class SwapiService {
  _apiBase = 'https://swapi.dev/api/';
  _imgBase = '/assets/img/';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Ошибкаааааааааааа ${url}`);
    }
    return await res.json();
  }

  getPersonImage = ({id}) => {
    return this.getImage(id, 'characters');
  }

  getStarshipImage = ({id}) => {
    return this.getImage(id, 'starships');
  }

  getPlanetImage = ({id}) => {
    return this.getImage(id, 'planets');
  }

  getPerson = async (id) => {
    const person = await this.getResource(`people/${id}/`);
    return this._transformPerson(person);
  }

  getAllPersons = async () => {
    const res = await this.getResource(`people/`);
    return res.results.map(this._transformPerson);
  }

  getStarship = async (id) => {
    const starship = await this.getResource(`starships/${id}/`);
    return this._transformStarship(starship);
  }

  getAllStarships = async () => {
    const res = await this.getResource(`starships/`);
    return res.results.map(this._transformStarship);
  }

  getPlanet = async (id) => {
    const planet = await this.getResource(`planets/${id}/`);
    return this._transformPlanet(planet);
  }

  getAllPlanets = async () => {
    const res = await this.getResource(`planets/`);
    return res.results.map(this._transformPlanet);
  }

  getImage(id, type) {
    return `${this._imgBase}${type}/${id}.jpg`;
  }

  _extractId = (item) => {
    const idRegExp = /\/(\d+)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet = planet => {
    const id = this._extractId(planet);
    return {
      id,
      name: planet.name,
      population: planet.population,
      period: planet.rotation_period,
      diameter: planet.diameter,
    };
  };

  _transformStarship = starship => {
    const {
      name,
      model,
      manufacturer,
      length,
      crew,
      passengers,
    } = starship;
    return {
      id: this._extractId(starship),
      name,
      model,
      manufacturer,
      costInCredits: starship.cost_in_credits,
      length,
      crew,
      passengers,
      cargoCapacity: starship.cargo_capacity,
    };
  };

  _transformPerson = person => {
    console.log('trans person', person);
    const { name, gender, birth_year, eye_color } = person;
    return {
      id: this._extractId(person),
      name,
      gender,
      birthYear: birth_year,
      eyeColor: eye_color,
    };
  };
}

export default SwapiService;
