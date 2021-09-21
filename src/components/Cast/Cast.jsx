import { useState, useEffect } from "react";
import { getCastById } from "../../service/movieApi.js";

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
        <ul>
          {cast.map((el) => {
            return (
              <li key={el.id}>
                <img
                  src={
                    el.profile_path
                      ? `${baseImg}${el.profile_path}`
                      : `${noImg}`
                  }
                  alt={el.name}
                />
                <span>{el.name}</span>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
