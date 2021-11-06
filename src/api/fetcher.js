const BASE_NASA_URL = "https://images-api.nasa.gov/search";

export const fetchData = async (query) => {
  const url = await updateUrl(query);

  return await fetch(url)
    .then((response) => response.json())
    .then((data) => data);
};

const updateUrl = async (query) => {
  return (await query.yearStart)
    ? `${BASE_NASA_URL}?q=${query.keywords}&media_type=${query.mediaType}&year_start=${query.yearStart}`
    : `${BASE_NASA_URL}?q=${query.keywords}&media_type=${query.mediaType}`;
};
