import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Header = styled.header`
  width: 100%;
  padding: 24px 30px;
  background: grey;
  box-shadow: 0px 8px 10px 0px rgba(48, 48, 48, 0.75);
`;
export const Nav = styled.nav`
  margin-left: 40px;
`;
export const Navlink = styled(NavLink)`
  position: relative;
  font-weight: 600;
  font-size: 40px;
  color: #000;
  transition: color 250ms linear;
  &:not(:last-child) {
    margin-right: 36px;
  }
  &:hover,
  &:focus {
    color: #e9dada;
  }
  &.active {
    color: #e9dada;

    text-shadow: 0 0 15px rgba(255, 255, 255, 0.5),
      0 0 18px rgba(255, 255, 255, 0.5);
  }
`;