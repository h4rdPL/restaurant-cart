import React, { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { MenuItem } from "./components/menuItem/MenuItem";
import { CartItem } from "./components/cartItem/CartItem";
import data from "../src/data.json";

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
  const theme = useTheme();
  const [isDesktop, setIsDesktop] = useState(
    window.innerWidth >= parseInt(theme.breakpoints.desktop)
  );
  const [isTablet, setIsTablet] = useState(
    window.innerWidth >= parseInt(theme.breakpoints.tablet) &&
      window.innerWidth < parseInt(theme.breakpoints.desktop)
  );
  const [cartItems, setCartItems] = useState([]);
  const [menuItems, setMenuItems] = useState(
    data.map((item) => ({ ...item, quantity: 0 }))
  );

  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= parseInt(theme.breakpoints.desktop));
    setIsTablet(
      window.innerWidth >= parseInt(theme.breakpoints.tablet) &&
        window.innerWidth < parseInt(theme.breakpoints.desktop)
    );
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find(
        (cartItem) => cartItem.name === item.name
      );

      if (itemExists) {
        return prevItems.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });

    setMenuItems((prevItems) =>
      prevItems.map((menuItem) =>
        menuItem.name === item.name
          ? { ...menuItem, quantity: (menuItem.quantity || 0) + 1 }
          : menuItem
      )
    );
  };

  const onRemove = (itemName) => {
    setCartItems((prevItems) =>
      prevItems.filter((cartItem) => cartItem.name !== itemName)
    );

    setMenuItems((prevItems) =>
      prevItems.map((menuItem) =>
        menuItem.name === itemName ? { ...menuItem, quantity: 0 } : menuItem
      )
    );
  };

  return (
    <MenuItemWrapper>
      <Menu>
        <Heading>Desserts</Heading>
        <MenuItem
          isDesktop={isDesktop}
          isTablet={isTablet}
          addToCart={addToCart}
          removeFromCart={onRemove}
          items={menuItems}
        />
      </Menu>
      <CartItem cartItems={cartItems} onRemove={onRemove} />
    </MenuItemWrapper>
  );
};

export default App;
