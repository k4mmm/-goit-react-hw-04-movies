import React from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { StyledLink, StyledUl, StyledLi } from "./FilmList.styled";

export default function FilmList({ content, path }) {
  const location = useLocation();
  return (
    <StyledUl>
      {content.map((contentEl) => {
        return (
          <StyledLi key={contentEl.id}>
            <StyledLink
              to={{
                pathname: `${path}/${contentEl.id}`,
                state: { from: location },
              }}
            >
              {contentEl.original_title}
            </StyledLink>
          </StyledLi>
        );
      })}
    </StyledUl>
  );
}

FilmList.propTypes = {
  content: PropTypes.array.isRequired,
  path: PropTypes.string.isRequired,
};
