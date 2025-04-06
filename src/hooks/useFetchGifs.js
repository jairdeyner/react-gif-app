import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const newGifs = await getGifs(category);
      setGifs(newGifs);

      setIsLoading(false);
    })();
  }, [category]);

  return {
    gifs,
    isLoading,
  };
};
