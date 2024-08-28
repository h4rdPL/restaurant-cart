import "./App.css";
import styled from "styled-components";
import { MenuItem } from "./components/menuItem/MenuItem";

const MenuItemWrapper = styled.div`
  padding: 1.5rem 1rem;
`;

const Heading = styled.h1`
  margin-bottom: 2rem;
`;

const App = () => {
  return (
    <>
      <MenuItemWrapper>
        <Heading>Desserts</Heading>
        <MenuItem />
      </MenuItemWrapper>
    </>
  );
};

export default App;
