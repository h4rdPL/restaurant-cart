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
  const [cartItems, setCartItems] = useState([]);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= 1440);
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
  };

  const removeFromCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find(
        (cartItem) => cartItem.name === item.name
      );

      if (itemExists.quantity === 1) {
        return prevItems.filter((cartItem) => cartItem.name !== item.name);
      } else {
        return prevItems.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      }
    });
  };

  return (
    <MenuItemWrapper>
      <Menu>
        <Heading>Desserts</Heading>
        <MenuItem
          isDesktop={isDesktop}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </Menu>
      <CartItem cartItems={cartItems} />
    </MenuItemWrapper>
  );
};

export default App;
