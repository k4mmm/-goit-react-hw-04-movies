import { useState, useEffect } from "react";
import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  useParams,
  useHistory,
  useLocation,
} from "react-router-dom";
import { getMovieById } from "../../service/movieApi";
import Cast from "../Cast/Cast";
import FilmReviews from "../FilmReviews/FilmReviews";
import s from "./FilmCard.module.css";

export default function FilmCard() {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  const imgBaseUrl = "https://image.tmdb.org/t/p/w500/";
  const imgNotFound =
    "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg";

  useEffect(() => {
    getMovieById(movieId).then((res) => setFilm(res.data));
  }, [movieId]);

  const { url, path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();

  const onGoBackClick = () => {
    history.push(location?.state?.from);
  };

  const dateNormalize = (date) => {
    return date.slice(0, -6);
  };

  const genresNormalize = (genres) => {
    return genres
      .map((genre) => {
        return genre.name;
      })
      .join(", ");
  };

  return (
    <>
      {location?.state?.from && (
        <button type="button" onClick={onGoBackClick}>
          Go Back
        </button>
      )}
      {film && (
        <div className={s.movieDetailes}>
          <img
            src={
              film.poster_path
                ? `${imgBaseUrl}${film.poster_path}`
                : imgNotFound
            }
            alt={film.original_title}
          />
          <div className="movie-info">
            <h1>
              {film.original_title} ({dateNormalize(film.release_date)})
            </h1>
            <p>User Score: {film.vote_average}</p>
            <h2>Overview</h2>
            <p>{film.overview}</p>
            {film.genres && (
              <>
                <h3>Genres</h3>
                <p>{genresNormalize(film.genres)}</p>
              </>
            )}
          </div>
        </div>
      )}
      <div>
        <h4>Additional informatiom</h4>
        <ul>
          <li>
            <Link to={`${url}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`${url}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path={`${path}/cast`}>
          <Cast movieId={movieId} baseImg={imgBaseUrl} noImg={imgNotFound} />
        </Route>
        <Route path={`${path}/reviews`}>
          <FilmReviews movieId={movieId} />
        </Route>
      </Switch>
    </>
  );
}
