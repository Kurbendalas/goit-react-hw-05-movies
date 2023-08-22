import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import MovieInfo from 'components/MovieInfo/MovieInfo';
import { Suspense, useEffect, useRef, useState } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { searchMovieDetails } from 'services/moviesAPI';
import {
  List,
  Item,
  ButtonBack,
  Container,
  LinkText,
} from './MovieDetails.styled';

const Status = {
  INIT: 'init',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};
const MovieDetails = () => {
  const params = useParams();
  const [status, setStatus] = useState(Status.INIT);
  const [movie, setMovie] = useState([]);
  const location = useLocation();
  const id = params?.movieId;

  useEffect(() => {
    async function getMovieDetail() {
      try {
        setStatus(Status.LOADING);
        const resp = await searchMovieDetails(id);
        setMovie(resp);
        setStatus(Status.SUCCESS);
      } catch (error) {
        setStatus(Status.ERROR);
        console.log(error.message);
      }
    }
    getMovieDetail();
  }, [id]);

  return (
    <Container>
      <Link to={useRef(location.state?.from ?? '/').current}>
        <ButtonBack type="button">Back</ButtonBack>
      </Link>
      {status === Status.ERROR && <Error />}
      {status === Status.LOADING && <Loader />}
      {status === Status.SUCCESS && (
        <MovieInfo
          title={movie.original_title}
          url={movie.poster_path}
          overview={movie.overview}
          genres={movie.genres}
          date={movie.release_date}
          rating={movie.vote_average}
        />
      )}
      <List>
        <Item>
          <LinkText to="cast" state={{ from: location }}>
            Cast
          </LinkText>
        </Item>
        <Item>
          <LinkText to="reviews" state={location?.state ?? '/'}>
            Reviews
          </LinkText>
        </Item>
      </List>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default MovieDetails;