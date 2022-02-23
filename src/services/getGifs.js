const apiKey = "jqk8lBJgcbjAQltqTvlqJc2ugOkR0cio";

export default function getGifs({ keyword = "cats" }) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;

  return (
    fetch(apiURL)
      //formatear la respuesta a json
      .then((res) => res.json())
      //nos devuelve un array de objetos de nombre data, extraigo data del response
      .then((response) => {
        const { data } = response;
        //ir a buscar las url de los gif a la api
        const gifs = data.map((image) => {
          const { images, title, id } = image;
          const { url } = images.downsized_medium;
          return { title, id, url };
        });
        console.log(gifs);
        //devuelvo los gifs
        return gifs;
      })
  );
}
