import React from "react";
import styled from "styled-components";

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  padding: 1.5rem;
  min-height: 300px;
  width: 100%;
  max-height: 600px;
  overflow-y: auto;
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

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem 0;
`;

const TotalWrapper = styled.div`
  margin-top: auto;
  padding-top: 1rem;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.rose300};
`;

const TotalPrice = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.red};
  font-weight: bold;
`;

export const CartItem = ({ cartItems }) => {
  const calculateTotalPrice = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <CartWrapper>
      <CartHeading>Your Cart ({cartItems.length})</CartHeading>
      {cartItems.length === 0 ? (
        <TestWrapper>
          <CartImage
            src="/images/illustration-empty-cart.svg"
            alt="Add to Cart"
          />
          <CartParagraph>Your added items will appear here</CartParagraph>
        </TestWrapper>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <ItemWrapper key={index}>
              <CartParagraph>{item.name}</CartParagraph>
              <CartParagraph>
                ${item.price.toFixed(2)} x {item.quantity}
              </CartParagraph>
            </ItemWrapper>
          ))}
          <TotalWrapper>
            <TotalPrice>Total: ${calculateTotalPrice()}</TotalPrice>
          </TotalWrapper>
        </>
      )}
    </CartWrapper>
  );
};
