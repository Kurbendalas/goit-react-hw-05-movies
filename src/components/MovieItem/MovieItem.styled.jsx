import styled from 'styled-components';
export const Item = styled.li`
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 250ms linear;

  &:hover,
  &:focus {
    box-shadow: 0px 7px 24px 0px rgba(0, 0, 0, 0.75);
  }
`;
export const Box = styled.div`
  overflow: hidden;
`;
export const Poster = styled.img`
  transition: scale 250ms linear;

  &:hover,
  &:focus {
    scale: 1.05;
    box-shadow: 0px 7px 24px 0px rgba(0, 0, 0, 0.75);
  }
`;
export const Block = styled.div`
  background-color: grey;
  padding: 16px;
  width: 568px;
`;
export const Title = styled.h2`
  font-size: 40px;
  color: black;
  transition: color 250ms linear;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:hover,
  &:focus {
    color: red;
  }
`;
export const Text = styled.p`
  margin-top: 12px;
  font-size: 20px;
  font-weight: 500;
  color: black;
`;