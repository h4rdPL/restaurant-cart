import React from "react";
import data from "../../data.json";
import styled from "styled-components";

const MenuItemWrapper = styled.div`
  display: grid;
  width: 100%;
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
`;

const Button = styled.button`
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, 30%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.7rem;
  font-weight: bold;
  background-color: #fff;
  padding: 0.5rem 1.75rem;
  border: 2px solid ${({ theme }) => theme.colors.rose300};
  border-radius: 25px;
  z-index: 1;
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

export const MenuItem = ({ isDesktop }) => {
  return (
    <MenuItemWrapper>
      {data.map((item, index) => (
        <div key={index}>
          <ImageWrapper>
            <Photo
              src={isDesktop ? item.image.desktop : item.image.mobile}
              alt={item.name}
            />
            <Button>
              <img src="/images/icon-add-to-cart.svg" alt="Add to Cart" />
              Add to Cart
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
