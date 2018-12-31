/* global tw */
import React from 'react';
import 'typeface-cantata-one';
import 'typeface-open-sans';
import '../styles/global';
import { Parallax } from 'react-spring/dist/addons';

import SEO from '../components/SEO';
import About from '../components/common/About';
import Presentation from '../components/common/Presentation';
import Projects from '../components/common/Projects';

import { UpDown, UpDownWide, waveAnimation } from '../styles/animations';

import { ContactText, Content, Divider, Footer, Inner, InnerWave, Title, WaveWrapper } from '../styles/utils';

const Index = () => (
  <React.Fragment>
    <SEO />
    <Parallax pages={5}>
      {/* Presentation */}
      <Content speed={0.4} offset={0}>
        <Presentation />
      </Content>
      {/* End Presentation */}
      <Divider bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)" speed={1} offset={1.1} factor={4} />
      {/* Projects */}
      <Content speed={0.4} offset={1.2} factor={2}>
        <Inner>
          <Projects />
        </Inner>
      </Content>
      {/* End Projects */}
      <Divider bg="#23262b" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={3} factor={1.2} />
      {/* About me */}
      <Content speed={0.4} offset={3.1}>
        <Inner>
          <About />
        </Inner>
      </Content>
      {/* End About me */}
      <Divider fill="#23262b" speed={0.2} offset={4}>
        <WaveWrapper>
          <InnerWave>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 338.05" preserveAspectRatio="none">
              <path className={waveAnimation}>
                <animate
                  attributeName="d"
                  values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                  repeatCount="indefinite"
                  dur="30s"
                />
              </path>
            </svg>
          </InnerWave>
        </WaveWrapper>
      </Divider>
      {/* Get in touch */}
      <Content speed={0.4} offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:plizNoSp4m@domain.tld">Hi</a> or find me on other platforms:{' '}
            <a href="https://dribbble.com/LekoArts">Dribbble</a> &{' '}
            <a href="https://www.instagram.com/lekoarts.de/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2018 by Gatsby Starter Portfolio Cara.{' '}
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">Github Repository</a>.
        </Footer>
      </Content>
    </Parallax>
  </React.Fragment>
);

export default Index;
