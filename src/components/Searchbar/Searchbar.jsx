import { useState } from "react";

export default function Searchbar({ onSubmit }) {
  const [searchValue, setSearchValue] = useState("");

  const onSearchChange = (e) => {
    setSearchValue(e.currentTarget.value);
  };

  const searchFilm = (e) => {
    e.preventDefault();
    if (searchValue.trim() === "") {
      return;
    } else {
      onSubmit(searchValue);
    }
  };

  return (
    <form onSubmit={searchFilm}>
      <input
        onChange={onSearchChange}
        type="text"
        autoComplete="off"
        value={searchValue}
        autoFocus
        placeholder="Search film"
      />
      <button type="submit">Search</button>
    </form>
  );
}
