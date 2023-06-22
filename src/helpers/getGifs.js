export const getGifs = async (category) => {
  const API_KEY = "cVtP5sJGiClhWZtzyVVZ7SGtW7FiQ1ac";
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=5`;

  const resp = await fetch(URL);
  const { data = [] } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  console.log(gifs);
  return gifs;
};
