import React from 'react';
import { BigTitle, Hero, Subtitle } from '../../styles/utils';

const info = {
  title: 'Hello, \n' +
  'I m Davide Bruner',
  subtitle: "I'm a web and mobile developer bla bla.",
};

const Presentation = () => (
  <React.Fragment>
    <Hero>
      <BigTitle>{info.title}</BigTitle>
      <Subtitle>{info.subtitle}</Subtitle>
    </Hero>
  </React.Fragment>
);

export default Presentation;
