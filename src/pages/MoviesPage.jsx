import { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar/Searchbar";
import { getSearchMovie } from "../service/movieApi";
import { Link, useRouteMatch } from "react-router-dom";

export default function MoviesPages() {
  const [search, setSearch] = useState(null);
  const [films, setFilms] = useState([]);

  const { url } = useRouteMatch();

  useEffect(() => {
    if (!search) {
      return;
    }
    getSearchMovie(search).then((res) => {
      setFilms(res.data.results);
    });
  }, [search]);

  const onSearchClick = (query) => {
    setSearch(query);
  };

  return (
    <>
      <Searchbar onSubmit={onSearchClick} />
      <ul>
        {films.map((film) => {
          return (
            <li key={film.id}>
              <Link to={`${url}/${film.id}`}>{film.original_title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
