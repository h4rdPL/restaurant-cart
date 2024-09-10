import React from "react";
import styled from "styled-components";

const MenuItemWrapper = styled.div`
  display: grid;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, minmax(0, 1800px));
    grid-gap: 1rem;
    justify-content: center;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(3, minmax(0, 1800px));
    grid-gap: 1rem;
    justify-content: center;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

const Photo = styled.img`
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  border: 3px solid
    ${({ isSelected, theme }) =>
      isSelected ? theme.colors.red : "transparent"};
  transition: border 0.3s ease;

  &:hover,
  &.hovered {
    border: 3px solid ${({ theme }) => theme.colors.red};
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const ContentOnHover = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  height: 100%;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.red};
`;

const HoverImage = styled.img`
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  padding: 0.5rem;
  width: 30px;
  height: 30px;
  object-fit: contain;
`;

const Quantity = styled.p`
  color: ${({ theme }) => theme.colors.white};
`;

const Button = styled.button`
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, 30%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
  font-weight: bold;
  background-color: #fff;
  padding: 0.5rem 1.75rem;
  border: 2px solid ${({ theme }) => theme.colors.rose300};
  border-radius: 25px;
  z-index: 1;
  width: 150px;
  height: 50px;
  cursor: pointer;

  & > ${Content}, & > ${ContentOnHover} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
  }

  &:hover ${Content} {
    display: none;
  }

  &:hover ${ContentOnHover} {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 0.5rem;
  }
`;

const Price = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-weight: bold;
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 1rem;
`;

const Category = styled.p`
  color: ${({ theme }) => theme.colors.rose300};
  font-weight: 700;
`;

const DataInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin: 1.5rem 0;
`;

export const MenuItem = ({
  isDesktop,
  isTablet,
  addToCart,
  removeFromCart,
  items,
}) => {
  const handlePhotoClick = () => {};

  const handleClickIncrement = (item) => {
    addToCart(item);
  };

  const handleClickDecrement = (item) => {
    if (item.quantity > 0) {
      removeFromCart(item.name);
    }
  };

  return (
    <MenuItemWrapper>
      {items.map((item, index) => (
        <div key={index}>
          <ImageWrapper>
            <Photo
              src={
                isDesktop
                  ? item.image.desktop
                  : isTablet
                  ? item.image.tablet
                  : item.image.mobile
              }
              alt={item.name}
              isSelected={item.isSelected}
              onClick={() => handlePhotoClick(index)}
            />
            <Button>
              <Content>
                <img src="/images/icon-add-to-cart.svg" alt="Add to Cart" />
                Add to Cart
              </Content>
              <ContentOnHover>
                <HoverImage
                  onClick={() => handleClickDecrement(item)}
                  src="/images/icon-decrement-quantity.svg"
                  alt="minus"
                />
                <Quantity>{item.quantity}</Quantity>
                <HoverImage
                  onClick={() => handleClickIncrement(item)}
                  src="/images/icon-increment-quantity.svg"
                  alt="plus"
                />
              </ContentOnHover>
            </Button>
          </ImageWrapper>
          <DataInfo>
            <Category>{item.category}</Category>
            <Name>{item.name}</Name>
            <Price>${item.price.toFixed(2)}</Price>
          </DataInfo>
        </div>
      ))}
    </MenuItemWrapper>
  );
};
