import React, { Dispatch, SetStateAction } from 'react';

import { Black, Ice, Wrapper, Yellow } from './styles';
import { Button, Flex, Heading, RadioCards, Text } from '@radix-ui/themes';
import { BookmarkIcon } from "@radix-ui/react-icons"
import { TColor } from '../../types';

type Props = {
  setColor: Dispatch<SetStateAction<TColor>>
}

const Description: React.FC<Props> = ({setColor}) => {
  return (
    <Wrapper>
      <Heading mb="2">Oversized hoodie: 35.99$</Heading>
      <Text>
        Cotton hoodie with brushed interior. Adjustable hood, long sleeves. Front pocket, ribbed details.
        Cotton hoodie with brushed interior. Adjustable hood, long sleeves. Front pocket, ribbed details.
        Cotton hoodie with brushed interior. Adjustable hood, long sleeves. Front pocket, ribbed details.
      </Text>
      <Heading size="4">
        Color
      </Heading>
      <RadioCards.Root defaultValue="black" onValueChange={(value) => setColor(value as TColor)}>
        <RadioCards.Item value="black" style={{padding: 0, height: 48}}>
            <Black/>
        </RadioCards.Item>
        <RadioCards.Item value="yellow" style={{padding: 0, height: 48}}>
            <Yellow/>
        </RadioCards.Item>
        <RadioCards.Item value="ice" style={{padding: 0, height: 48}}>
            <Ice/>
        </RadioCards.Item>
      </RadioCards.Root>
      <Heading size="4">
        Size
      </Heading>
      <RadioCards.Root defaultValue="2" columns={{ initial: "1", sm: "4" }}>
        <RadioCards.Item value="1">
          <Flex direction="column" width="100%">
            <Text weight="bold" align="center">US / S</Text>
          </Flex>
        </RadioCards.Item>
        <RadioCards.Item value="2">
          <Flex direction="column" width="100%">
            <Text weight="bold"  align="center">US / M</Text>
          </Flex>
        </RadioCards.Item>
        <RadioCards.Item value="3">
          <Flex direction="column" width="100%">
            <Text weight="bold"  align="center">US / L</Text>
          </Flex>
        </RadioCards.Item>
        <RadioCards.Item value="4">
          <Flex direction="column" width="100%">
            <Text weight="bold"  align="center">US / XL</Text>
          </Flex>
        </RadioCards.Item>
      </RadioCards.Root>
      <Button variant="solid" size={'4'}>
        <BookmarkIcon scale={5}/>
          Add to card
        </Button>

    </Wrapper>
  );
};

export default Description;
