import { useState } from "react";
import PropTypes from "prop-types";
import { SearchInput, StyledForm, StyledBtn } from "./Searchbar.styled";

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
    <StyledForm onSubmit={searchFilm}>
      <SearchInput
        onChange={onSearchChange}
        type="text"
        autoComplete="off"
        value={searchValue}
        autoFocus
        placeholder="Search film"
      />
      <StyledBtn type="submit">Search</StyledBtn>
    </StyledForm>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
