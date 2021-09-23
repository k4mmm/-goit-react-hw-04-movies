import { StyledNav, StyledNavLink } from "./Navigation.styled";

const Navigation = () => {
  return (
    <StyledNav>
      <StyledNavLink exact to="/" activeStyle={{ color: "#2196f3" }}>
        Home
      </StyledNavLink>
      <StyledNavLink to="/movies" activeStyle={{ color: "#2196f3" }}>
        Movies
      </StyledNavLink>
    </StyledNav>
  );
};

export default Navigation;
