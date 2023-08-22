import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchReview } from 'services/moviesAPI';
import { Text, List, Item, Title, ReviewText } from './Reviews.styled';

const Status = {
  INIT: 'init',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const Reviews = () => {
  const [status, setStatus] = useState(Status.INIT);
  const [review, setReview] = useState([]);
  const params = useParams();
  const id = params?.movieId;
  useEffect(() => {
    async function getReview() {
      try {
        setStatus(Status.LOADING);
        const resp = await searchReview(id);
        setReview(resp.results);
        setStatus(Status.SUCCESS);
      } catch (error) {
        setStatus(Status.ERROR);
        console.log(error.message);
      }
    }
    getReview();
  }, [id]);
  return (
    <div>
      {status === Status.ERROR && <Error />}
      {status === Status.LOADING && <Loader />}
      {status === Status.SUCCESS && (
        <List>
          {review.length === 0 ? (
            <Text>No data available</Text>
          ) : (
            review?.map(({ id, author, content }) => (
              <Item key={id}>
                <Title>{author}</Title>
                <ReviewText>{content}</ReviewText>
              </Item>
            ))
          )}
        </List>
      )}
    </div>
  );
};

export default Reviews;