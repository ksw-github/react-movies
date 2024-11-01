import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const {id} = useParams();
  const getMovie = async() => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  }
  const torrents = [
    {
      url: 'https://yts.mx/torrent/download/B0443AE57345B3D2D8FAB3AB89E5DA41074FBB8B',
      quality: '720p',
      size: '1.02 GB',
    },
    {
      url: 'https://yts.mx/torrent/download/6F3DA8C2B3C5C8C3A252FB36E705D7E44578DB5C',
      quality: '1080p',
      size: '2.09 GB',
    },
    {
      url: 'https://yts.mx/torrent/download/134E00A35383FCAC0A0869D1691B4D76573148E5',
      quality: '1080p (x265)',
      size: '1.9 GB',
    },
  ];

  useEffect(() => {
    getMovie();
  },[id]);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen text-2xl">
          <strong>Loading...</strong>
        </div>
      ) : (
        <div className="bg-cover bg-center grid place-items-center min-h-screen py-20" style={{ backgroundImage: movie ? `url(${movie.background_image_original})` : 'none' }}>
          <div className="grid xl:grid-cols-2 place-items-center gap-10 mx-auto w-[70%] text-white">
            <div>
              <img 
              src={movie.large_cover_image}
              alt={movie.title}
              className="rounded-md shadow-md border border-[#53535380]"
              />
            </div>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <h2 className="text-4xl font-bold">{movie.title}</h2>
                <span className="text-sm whitespace-nowrap">{new Date(movie.date_uploaded).toLocaleDateString('ko-KR')}</span>
              </div>
              <div className="grid text-base">
                <span>⭐{movie.rating} · {movie.language} · {movie.year} · {Math.floor(movie.runtime / 60)}H {movie.runtime % 60}M</span>
                <span className="font-bold">{movie.genres.map(genre => `#${genre}`).join(' ')}</span>
              </div>
              <hr className="border-[#cdcdcd80]" />
              <p className={`${movie.description_full ? 'text-base' : 'text-center text-sm'}`}>
                {movie.description_full ? (movie.description_full.length > 1500 ? `${movie.description_full.slice(0, 1500)}...` : movie.description_full) : "No content."}
              </p>
              <hr className="border-[#cdcdcd80]" />
              <span className="text-center font-bold">Select movie quality</span>
              <div className="flex gap-5 justify-between">
                {torrents.map((torrent, index) => (
                  <a key={index} href={torrent.url} className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition text-center text-sm" download>
                    {torrent.quality} Download ({torrent.size})
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;