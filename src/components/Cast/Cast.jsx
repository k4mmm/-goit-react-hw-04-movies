import { useState, useEffect } from "react";
import { getCastById } from "../../service/movieApi.js";
import { StyledImg, StyledUl, StyledLi, StyledSpan } from "./Cast.styled";
import PropTypes from "prop-types";

export default function Cast({ movieId, baseImg, noImg }) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getCastById(movieId).then((res) => {
      setCast(res.data.cast);
    });
  }, [movieId]);

  return (
    <>
      {cast && (
        <StyledUl>
          {cast.map((el) => {
            return (
              <StyledLi key={el.id}>
                <StyledImg
                  src={
                    el.profile_path
                      ? `${baseImg}${el.profile_path}`
                      : `${noImg}`
                  }
                  alt={el.name}
                />
                <StyledSpan>{el.name}</StyledSpan>
              </StyledLi>
            );
          })}
        </StyledUl>
      )}
    </>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
  baseImg: PropTypes.string.isRequired,
  noImg: PropTypes.string.isRequired,
};
