import { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar/Searchbar";
import { getSearchMovie } from "../service/movieApi";
import { Link, useRouteMatch, useLocation, useHistory } from "react-router-dom";

export default function MoviesPages() {
  const location = useLocation();
  const history = useHistory();

  const searchParam = new URLSearchParams(location.search).get("query") ?? "";

  const [search, setSearch] = useState(searchParam);
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
    history.push({ ...location, search: `query=${query}` });
  };
  return (
    <>
      <Searchbar onSubmit={onSearchClick} />
      <ul>
        {films.map((film) => {
          return (
            <li key={film.id}>
              <Link
                to={{
                  pathname: `${url}/${film.id}`,
                  state: { from: location },
                }}
              >
                {film.original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
