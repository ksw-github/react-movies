import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await ( await fetch (
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    )).json();
    setMovies(json.data.movies);
    setLoading(false);
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="my-20 w-[70%] mx-auto">
      <h2 className="text-xl font-bold py-3">Movies</h2>
      <hr className="border-red-500 border-2 mb-10" />
      {loading ? (
        <div className="flex items-center justify-center h-screen text-2xl">
          <strong>Loading...</strong>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {movies.map((movie) => (
            <Movie 
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title_long}
            summary={movie.summary}
            genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;