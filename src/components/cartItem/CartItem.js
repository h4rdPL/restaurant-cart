import React from "react";
import styled from "styled-components";

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  padding: 1.5rem;
  height: 300px;
  width: 100%;
`;

const CartHeading = styled.h2`
  align-self: flex-start;
  color: ${({ theme }) => theme.colors.red};
`;

const CartImage = styled.img`
  width: 40%;
`;

const CartParagraph = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.rose400};
  font-weight: bold;
  padding-top: 1rem;
`;

const TestWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  text-align: center;
`;

export const CartItem = () => {
  return (
    <CartWrapper>
      <CartHeading>Your Cart (0)</CartHeading>
      <TestWrapper>
        <CartImage
          src="/images/illustration-empty-cart.svg"
          alt="Add to Cart"
        />
        <CartParagraph>Your added items will appear here</CartParagraph>
      </TestWrapper>
    </CartWrapper>
  );
};
