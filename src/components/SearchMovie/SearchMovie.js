import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Container, Form, Input, ButtonStyled } from "./SearchMovie.styled";
import { BsSearch } from "react-icons/bs";
import Notiflix from "notiflix";

const SearchMovie = ({ onSubmit }) => {
  const oldQuery = useRef(null);
  const [queryParam, setQueryParam] = useState("");

  const handleOnChange = (e) => {
    const { value } = e.currentTarget;
    setQueryParam(value);
  };

  const reset = () => {
    setQueryParam("");
  };

  useEffect(() => {
    setQueryParam(queryParam);
  }, [queryParam]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (queryParam.trim().length === 0) {
      return Notiflix.Notify.failure("Please type in some search keywords");
    }

    if (
      oldQuery.current &&
      oldQuery.current.toLowerCase().trim() === queryParam.toLowerCase().trim()
    ) {
      reset();
      return Notiflix.Notify.failure(
        "Please enter a different movie name for new results."
      );
    }
    oldQuery.current = queryParam.trim();
    onSubmit(queryParam);
    reset();
  };

  return (
    <Container>
      <Form onSubmit={handleOnSubmit}>
        <ButtonStyled type="submit">
          <BsSearch />
        </ButtonStyled>
        <Input
          type="text"
          name="queryParam"
          autoComplete="off"
          value={queryParam}
          onChange={handleOnChange}
          autoFocus
          placeholder="Search movie"
        />
      </Form>
    </Container>
  );
};

SearchMovie.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchMovie;
