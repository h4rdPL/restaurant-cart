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
  align-items: center;
`;

const InnerCartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const QuantityPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const RemoveIcon = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 50px;
  padding: 2px;
  border: 2px solid ${({ theme }) => theme.colors.rose300};
`;

const TotalWrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  margin-top: auto;
  padding-top: 1rem;
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.rose300};
`;

const TotalPrice = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;

const Price = styled.p`
  font-weight: bold;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.black};
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  padding: 1rem 2rem;
  border: none;
  border-radius: 50px;
`;

const CarbonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.rose100};
  border-radius: 5px;
`;

const QuantitySpan = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-weight: bold;
`;

const PriceSpan = styled.span`
  font-weight: normal;
`;

export const CartItem = ({ cartItems, onRemove }) => {
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
          <img src="/images/illustration-empty-cart.svg" alt="Empty Cart" />
          <CartParagraph>Your added items will appear here</CartParagraph>
        </TestWrapper>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <ItemWrapper key={index}>
              <InnerCartWrapper>
                <CartParagraph>{item.name}</CartParagraph>
                <QuantityPriceWrapper>
                  <CartParagraph>
                    <QuantitySpan>{item.quantity}x</QuantitySpan> @{" "}
                    <PriceSpan>${item.price.toFixed(2)}</PriceSpan>
                  </CartParagraph>
                  <CartParagraph>
                    ${item.price.toFixed(2) * item.quantity}
                  </CartParagraph>
                </QuantityPriceWrapper>
              </InnerCartWrapper>
              <RemoveIcon
                src="/images/icon-remove-item.svg"
                alt="Remove item"
                onClick={() => onRemove(item.name)}
              />
            </ItemWrapper>
          ))}
          <TotalWrapper>
            <TotalPrice>
              <p>Order Total</p>
              <Price>${calculateTotalPrice()}</Price>
            </TotalPrice>
            <CarbonWrapper>
              <img src="/images/icon-carbon-neutral.svg" alt="Carbon neutral" />
              <p>
                This is a <b>carbon-neutral</b> delivery
              </p>
            </CarbonWrapper>
            <Button>Confirm Order</Button>
          </TotalWrapper>
        </>
      )}
    </CartWrapper>
  );
};
