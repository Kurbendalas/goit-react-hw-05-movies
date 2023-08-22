import { Error } from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { searchCast } from 'services/moviesAPI';
import { List, Text, Item, Title } from './Cast.styled';

const Status = {
  INIT: 'init',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};
const Cast = () => {
  const [status, setStatus] = useState(Status.INIT);
  const [cast, setCast] = useState([]);
  const params = useParams();
  const id = params?.movieId;
  useEffect(() => {
    async function getCast() {
      try {
        setStatus(Status.LOADING);
        const resp = await searchCast(id);
        setCast(resp.cast);
        setStatus(Status.SUCCESS);
      } catch (error) {
        setStatus(Status.ERROR);
        console.log(error.message);
      }
    }
    getCast();
  }, [id]);
  return (
    <div>
      {status === Status.ERROR && <Error />}
      {status === Status.LOADING && <Loader />}
      {status === Status.SUCCESS && (
        <List>
          {cast.length === 0 ? (
            <Text>No data available</Text>
          ) : (
            cast?.map((item, index) => (
              <Item key={index}>
                <img
                  src={
                    item.profile_path
                      ? `https://image.tmdb.org/t/p/w200${item.profile_path}`
                      : `https://eticketsolutions.com/demo/themes/e-ticket/img/movie.jpg`
                  }
                  alt=""
                  width="200px"
                  height="300px"
                />
                <Title>{item.original_name}</Title>
                <p>{item.character ? item.character : 'role'}</p>
              </Item>
            ))
          )}
        </List>
      )}
    </div>
  );
};

export default Cast;