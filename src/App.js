import { Switch, Route } from "react-router-dom";
import "./App.css";
import FilmCard from "./components/FilmCard/FilmCard";
import Navigation from "./components/Navigation/Navigation.jsx";
import HomePage from "./pages/HomePage";
import MoviesPages from "./pages/MoviesPage";
import NotFound from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Navigation />
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
    </>
  );
}

export default App;
