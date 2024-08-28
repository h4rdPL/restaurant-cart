import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MenuItem } from "./components/menuItem/MenuItem";
import { CartItem } from "./components/cartItem/CartItem";

const MenuItemWrapper = styled.div`
  padding: 1.5rem 2rem;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    width: 100%;
  }
`;

const Heading = styled.h1`
  margin-bottom: 2rem;
`;

const Menu = styled.div`
  margin: 0 2rem;
`;

const App = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= 1440);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <>
      <MenuItemWrapper>
        <Menu>
          <Heading>Desserts</Heading>
          <MenuItem isDesktop={isDesktop} />
        </Menu>
        <CartItem />
      </MenuItemWrapper>
    </>
  );
};

export default App;
