export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=PH3m2Ry8TyXRxlf2a4Kxm0FUaEXJZl75&q=${category}&limit=10`;

  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(({ id, title, images }) => ({
    id,
    title,
    url: images.downsized_medium.url,
  }));

  return gifs;
};