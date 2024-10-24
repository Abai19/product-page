import React from 'react';
import { Wrapper } from './styles';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { TColor } from '../../types';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 424 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 420, min: 0 },
    items: 1
  }
};

interface ImageProps {
  color: TColor; 
}

const Image: React.FC<ImageProps> = ({color}) => {
  const images: Record<TColor, JSX.Element[]> = {
    black: [
        <img src="https://static.zara.net/assets/public/bb36/8e14/68424737b738/c5796045e8bc/04393350800-a1/04393350800-a1.jpg?ts=1723039661160&w=750" alt="img1" />,
        <img src="https://static.zara.net/assets/public/299e/8035/6bf7416aa7e9/828b0885ad10/04393350800-a2/04393350800-a2.jpg?ts=1723039667609&w=750" alt="img2" />,
        <img src="https://static.zara.net/assets/public/57e6/4410/36814d129d6a/363ebc0c99c2/04393350800-a3/04393350800-a3.jpg?ts=1723039662340&w=750" alt="img3" />
    ],
    ice: [
      <img src="https://static.zara.net/assets/public/39a0/b810/1f734693bb4b/3f00baac74c4/04393350251-a1/04393350251-a1.jpg?ts=1723039661552&w=563"/>,
      <img src="https://static.zara.net/assets/public/a8db/331c/e0404bbda4dc/ee916feeee45/04393350251-a2/04393350251-a2.jpg?ts=1723039658419&w=563"/>,
      <img src="https://static.zara.net/assets/public/fe6f/bb6b/3f514973a9aa/ecbdeffe3386/04393350251-a3/04393350251-a3.jpg?ts=1723039672533&w=563"/>
    ],
    yellow: [
      <img src="https://static.zara.net/assets/public/5b95/fe16/011e49d9851e/0d825588fb57/04393350805-a1/04393350805-a1.jpg?ts=1723039672805&w=563"/>,
      <img src="https://static.zara.net/assets/public/a438/822e/41004eb2ad01/3d22bf6a8253/04393350805-a2/04393350805-a2.jpg?ts=1723039671352&w=563"/>,
      <img src="https://static.zara.net/assets/public/d94b/4682/0bfc4abf9888/584056dc57fb/04393350805-a3/04393350805-a3.jpg?ts=1723039669712&w=563"/>
    ]
  }
  return (
    <Wrapper>
      <Carousel responsive={responsive} >
        {images[color]}
      </Carousel>
    </Wrapper>
  );
};

export default Image;
