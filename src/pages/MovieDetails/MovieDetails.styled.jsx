import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 32px;
`;
export const ButtonBack = styled.button`
  display: block;
  margin-bottom: 20px;
  background: grey;
  border: none;
  border-radius: 10px;
  color: black;
  font-size: 18px;
  font-weight: 600;
  padding: 8px 16px;
  transition: box-shadow 250ms linear;
  &:hover,
  &:focus {
    box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.75);
  }
`;
export const List = styled.ul`
  display: flex;
  gap: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const Item = styled.li`
  background: grey;
  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  padding: 8px 16px;
  transition: box-shadow 250ms linear;
  &:hover,
  &:focus {
    box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.75);
  }
`;
export const LinkText = styled(NavLink)`
  color: black;
  font-size: 18px;
  font-weight: 600;
  transition: color 250ms linear;
  &:hover,
  &:focus {
    color: red;
    &.active {
      color: red;
    }
  }
`;