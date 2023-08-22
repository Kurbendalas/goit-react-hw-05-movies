import { Outlet } from 'react-router-dom';
import { Header, Nav, Navlink } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Nav>
          <Navlink to="/">Home</Navlink>
          <Navlink to="/movies">Movies</Navlink>
        </Nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Layout;