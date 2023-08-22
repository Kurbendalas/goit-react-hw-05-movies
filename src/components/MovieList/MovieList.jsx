import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import MovieItem from 'components/MovieItem/MovieItem';
import { List } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <>
      <List>
        {movies?.map(item => {
          return (
            <MovieItem
              location={location}
              key={item.id}
              title={item.original_title}
              url={item.backdrop_path}
              activeId={item.id}
              date={item.release_date}
            />
          );
        })}
      </List>
    </>
  );
};

export default MovieList;
MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};