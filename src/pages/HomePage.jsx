import { getTrendingMovie } from "../service/movieApi";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [trendFilms, setTrendFilms] = useState([]);

  useEffect(() => {
    getTrendingMovie().then((res) => {
      setTrendFilms(res.data.results);
    });
  }, []);
  return (
    <>
      <h1>Trends of the week</h1>
      <ul>
        {trendFilms.map((film) => {
          return (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`}>{film.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
