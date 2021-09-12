class SwapiService {
  _apiBase = 'https://swapi.dev/api/';
  _imgBase = '/assets/img/';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    console.log('res', res);
    if (!res.ok) {
      throw new Error(`Ошибкаааааааааааа ${url}`);
    }
    return await res.json();
  }

  async getPerson(id) {
    const person = await this.getResource(`/people/${id}/`);
    return this._transformPerson(person);
  }

  async getAllPersons() {
    const res = await this.getResource(`/people/`);
    return res.results.map(this._transformPerson);
  }

  async getStarship(id) {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  }

  async getAllStarships() {
    const res = await this.getResource(`/starships/`);
    return res.results.map(this._transformStarship);
  }

  async getPlanet(id) {
    const planet = await this.getResource(`planets/${id}/`);
    return this._transformPlanet(planet);
  }

  async getAllPlanets() {
    const res = await this.getResource(`/planets/`);
    return res.results.map(this._transformPlanet);
  }

  getImage(id, type) {
    return `/assets/img/${type}/${id}.jpg`;
  }

  _extractId(item) {
    const idRegExp = /\/(\d+)\/$/;
    return item.url.match(idRegExp)[1];
  }

  _transformPlanet(planet) {
    const id = this._extractId(planet);
    return {
      id,
      name: planet.name,
      population: planet.population,
      period: planet.rotation_period,
      diameter: planet.diameter,
    };
  }

  _transformStarship(starship) {
    const {
      name,
      model,
      manufacturer,
      costInCredits,
      length,
      crew,
      passengers,
      cargoCapacity,
    } = starship;
    return {
      id: this._extractId(starship),
      name,
      model,
      manufacturer,
      costInCredits,
      length,
      crew,
      passengers,
      cargoCapacity,
    };
  }

  _transformPerson(person) {
    const { name, gender, birthYear, eyeColor } = person;
    return {
      id: this._extractId(person),
      name,
      gender,
      birthYear,
      eyeColor,
    };
  }
}

export default SwapiService;
