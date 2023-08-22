import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from 'services/moviesAPI';
const Status = {
  INIT: 'init',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};
const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(Status.INIT);
  const search = searchParams.get('search') ?? '';

  useEffect(() => {
    async function getMovie() {
      try {
        setStatus(Status.LOADING);
        const resp = await searchMovie(search);
        setMovies(resp.results);
        setStatus(Status.SUCCESS);
      } catch (error) {
        setStatus(Status.ERROR);
        console.log(error.message);
      }
    }
    if (search) {
      getMovie();
    } else {
      setMovies([]);
    }
  }, [search]);
  const handleUpdateSearch = query => {
    setSearchParams({ search: query });
  };
  return (
    <>
      <SearchForm onSubmit={handleUpdateSearch} />
      {status === Status.SUCCESS && movies.length > 0 && (
        <MovieList movies={movies} />
      )}
      {status === Status.SUCCESS && movies.length === 0 && (
        <p style={{ fontSize: '20px', fontWeight: '500', textAlign: 'center' }}>
          Sorry, but nothing was found for {search}! Try again!
        </p>
      )}
      {status === Status.LOADING && <Loader />}
      {status === Status.ERROR && <Error />}
    </>
  );
};
export default Movies;