const callToApi = () => {
  return fetch() // url de la api
    .then((response) => response.json())
    .then((data) => {
      const result = () => {
        // código para limpiar los datos y pasarle a App solo lo que realmente necesita.
      };
      return result;
    });
};

export default callToApi;
