import React from 'react';
import { AboutDesc, AboutHero, AboutSub, Avatar, Title } from '../../styles/utils';
import avatar from '../../images/avatar.jpg';
import config from '../../../config/website';

const info = {
  title: 'About',
  subtitle:
    'The English language can not fully capture the depth and complexity of my thoughts.\n' +
    "So I'm incorporating Emoji into my speech to better express myself. Winky face.",
  description:
    'You know the way you feel when you see a picture of two otters holding hands?\n' +
    "That's how you're gonna feel every day. My mother cried the day I was born because she knew she’d never be prettier than me. You should make me\n" +
    'your campaign manager. I was born for politics. I have great hair and I love lying. Captain? The kids want to\n' +
    'know where Paulie the Pigeon is. I told them he got sucked up into an airplane engine, is that all right?',
};

const About = () => (
  <React.Fragment>
    <Title>{info.title}</Title>
    <AboutHero>
      <Avatar src={avatar} alt={config.siteTitleAlt} />
      <AboutSub>{info.subtitle}</AboutSub>
    </AboutHero>
    <AboutDesc>{info.description}</AboutDesc>
  </React.Fragment>
);

export default About;