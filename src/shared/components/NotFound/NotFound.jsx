import React from 'react';

import { Section, Wrap, Plug, Title } from './NotFound.styled';

export const NotFound = () => {
  return (
    <Section>
      <Title>{`Ooops:( Such news not found`}</Title>
      <Wrap>
        <Plug />
      </Wrap>
    </Section>
  );
};
