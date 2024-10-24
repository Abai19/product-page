import React, { useState } from 'react';
import { Wrapper } from './styles';
import Image from '../image';
import Description from '../description';
import { TColor } from '../../types';

const Product: React.FC = () => {
  const [color, setColor] = useState<TColor>('black')

  return (
    <Wrapper>
        <Image color={color}/>
        <Description setColor={setColor}/>
    </Wrapper>
  );
};

export default Product;
