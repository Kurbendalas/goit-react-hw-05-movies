import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../../api/moviesAPI";
import Loader from "../Loader";
import { StyledList, StyledItem, StyledImg, StyledText } from "./Cast.styled";
import defaultImage from "../../image/defaultImage.png";

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [isLoadedCast, setIsLoadedCast] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    onGettingMovieCast();
  }, []);

  const onGettingMovieCast = async () => {
    try {
      const response = await getMovieCast(movieId);
      const castData = response.data.cast;

      setCast(castData);
      setIsLoadedCast(castData.length === 0);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {!isLoadedCast ? (
        <Loader />
      ) : (
        <StyledList>
          {cast.map(({ id, name, profile_path, character }) => (
            <StyledItem key={id}>
              {profile_path ? (
                <StyledImg
                  src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                  alt={name}
                  width="100"
                />
              ) : (
                <StyledImg
                  src={defaultImage}
                  alt={name}
                  width="120"
                  height="150"
                />
              )}
              <StyledText>{name}</StyledText>
              <StyledText>Character: {character}</StyledText>
            </StyledItem>
          ))}
        </StyledList>
      )}
    </div>
  );
};

export default Cast;
