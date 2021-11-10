const BASE_NASA_URL = "https://images-api.nasa.gov";

const getAssetUrl = (id) => {
  return `${BASE_NASA_URL}/asset/${id}`;
};

export const fetchData = async (query) => {
  const url = await selectUrl(query);

  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
};

const selectUrl = async (query) => {
  return (await query.yearStart)
    ? `${BASE_NASA_URL}/search?q=${query.keywords}&media_type=${query.mediaType}&year_start=${query.yearStart}`
    : `${BASE_NASA_URL}/search?q=${query.keywords}&media_type=${query.mediaType}`;
};


export const updateResult = async (allData) => {
  const addUrl = async (item) => {
    return fetch(getAssetUrl(item.data[0].nasa_id))
      .then((response) => response.json())
      .then((data) => {
        return { ...item, linkOne: data.collection.items[0].href , linkTwo: data.collection.items[1].href };
      });
  };
  return Promise.all(allData.map((item) => addUrl(item)));
};
