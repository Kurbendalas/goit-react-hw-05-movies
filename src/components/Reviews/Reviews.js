import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../api/moviesAPI";
import Loader from "../Loader";
import { StyledItem } from "./Reviews.styled";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoadedReviews, setIsLoadedReviews] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    onGettingMovieReviews();
  }, []);

  const onGettingMovieReviews = async () => {
    try {
      const response = await getMovieReviews(movieId);
      const reviewsData = response.data.results;

      setReviews(reviewsData);
      setIsLoadedReviews(reviewsData.length === 0);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {!isLoadedReviews ? (
        <Loader />
      ) : (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <StyledItem key={id}>
              <h5>Author: {author}</h5>
              <p>{content}</p>
            </StyledItem>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
