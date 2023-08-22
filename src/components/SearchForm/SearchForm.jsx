import { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, ButtonSearch, Input } from './SearchForm.styled';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (query) {
      onSubmit(query);
      // setQuery('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <ButtonSearch type="submit">Search</ButtonSearch>
    </Form>
  );
};
export default SearchForm;
SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};