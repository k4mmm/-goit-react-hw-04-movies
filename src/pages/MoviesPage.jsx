import { useEffect, useState } from "react";
import { useRouteMatch, useLocation, useHistory } from "react-router-dom";
import Searchbar from "../components/Searchbar/Searchbar";
import { getSearchMovie } from "../service/movieApi";
import FilmList from "../components/FilmList/FilmList";

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
      <FilmList content={films} path={`${url}`} />
    </>
  );
}
