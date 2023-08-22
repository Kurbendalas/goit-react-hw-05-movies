import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { searchTrendingMovies } from 'services/moviesAPI';
import { MainTitle } from './Home.styled';

const pageStatus = {
  INIT: 'init',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(pageStatus.INIT);

  useEffect(() => {
    async function getTrendingMovies() {
      try {
        setStatus(pageStatus.LOADING);
        const resp = await searchTrendingMovies();
        setMovies(resp.results);
        setStatus(pageStatus.SUCCESS);
      } catch (error) {
        setStatus(pageStatus.ERROR);
        console.log(error.message);
      }
    }
    getTrendingMovies();
  }, []);

  return (
    <>
      <div>
        <MainTitle>Trending Movies</MainTitle>
        {status === pageStatus.ERROR && <Error />}
        {(status === pageStatus.LOADING || status === pageStatus.INIT) && (
          <Loader />
        )}

        {status === pageStatus.SUCCESS && <MovieList movies={movies} />}
      </div>
    </>
  );
};
export default Home;