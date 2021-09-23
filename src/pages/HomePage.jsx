import { getTrendingMovie } from "../service/movieApi";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function HomePage() {
  const [trendFilms, setTrendFilms] = useState([]);
  const location = useLocation();
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
              <Link
                to={{
                  pathname: `/movies/${film.id}`,
                  state: { from: location },
                }}
              >
                {film.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
