import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Item, Poster, Box, Block, Title, Text } from './MovieItem.styled';

const MovieItem = ({ activeId, location, url, title, date }) => {
  return (
    <Item>
      <Link to={`/movies/${activeId}`} state={{ from: location }}>
        <Box>
          <Poster
            src={
              url !== null
                ? `https://image.tmdb.org/t/p/w300${url}`
                : `https://eticketsolutions.com/demo/themes/e-ticket/img/movie.jpg`
            }
            //   src={`https://image.tmdb.org/t/p/w300${url}`}

            alt={title}
            width="600px"
            height="338px"
          />
        </Box>
        <Block>
          <Title>{title}</Title>
          <Text>Release date: {date}</Text>
        </Block>
      </Link>
    </Item>
  );
};

export default MovieItem;

MovieItem.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  activeId: PropTypes.number.isRequired,
  location: PropTypes.shape({
    state: PropTypes.string,
  }),
  date: PropTypes.string.isRequired,
};