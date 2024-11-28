const callToApi = () => {
  return fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      const result = data.results.map((person) => {
        return {
          photo: person.image,
          name: person.name,
          species: person.species,
          planet: person.origin.name,
          episodies: person.episode.length,
          status: person.status,
          id: person.id,
        };
      });
      return result;
    });
};

export default callToApi;
