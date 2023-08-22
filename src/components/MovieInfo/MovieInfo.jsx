import PropTypes from 'prop-types';
import {
  Container,
  MainNitle,
  Title,
  Text,
  List,
  Item,
  Img,
} from './MovieInfo.styled';

const MovieInfo = ({ title, url, overview, genres, date, rating }) => {
  return (
    <Container>
      <Img
        src={
          url !== null
            ? `https://image.tmdb.org/t/p/w300${url}`
            : `https://eticketsolutions.com/demo/themes/e-ticket/img/movie.jpg`
        }
        width="300"
        height="450"
        alt={title}
      />
      <div>
        <MainNitle>{title}</MainNitle>
        <Title>Release date</Title>
        <Text>{date ? date : 'No data available'}</Text>
        <Title>Rating</Title>
        <Text>{rating}</Text>
        <Title>Overview:</Title>
        <Text>{overview ? overview : 'No data available'}</Text>
        <Title>Genres</Title>
        <List>
          {genres?.length !== 0 ? (
            genres?.map(item => (
              <Item key={item.name}>
                <Text>{item.name}</Text>
              </Item>
            ))
          ) : (
            <Text>No data available</Text>
          )}
        </List>
      </div>
    </Container>
  );
};
export default MovieInfo;
MovieInfo.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string,
  genres: PropTypes.array,
  date: PropTypes.string.isRequired,
  rating: PropTypes.string,
};