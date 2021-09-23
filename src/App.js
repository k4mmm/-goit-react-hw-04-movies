import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation.jsx";
const FilmCard = lazy(() =>
  import("./components/FilmCard/FilmCard" /* webpackChunkName: "FilmCard" */)
);
const HomePage = lazy(() =>
  import("./pages/HomePage" /* webpackChunkName: "FiHomePagelmCard" */)
);
const MoviesPages = lazy(() =>
  import("./pages/MoviesPage" /* webpackChunkName: "MoviesPages" */)
);
const NotFound = lazy(() =>
  import("./pages/NotFoundPage" /* webpackChunkName: "NotFound" */)
);

function App() {
  return (
    <>
      <Navigation />
      <div style={{ margin: "0px 50px 0px 50px" }}>
        <Suspense fallback={<h1>LOADING...</h1>}>
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/movies">
              <MoviesPages />
            </Route>
            <Route path="/movies/:movieId">
              <FilmCard />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </>
  );
}

export default App;
