import React from 'react';
import { ProjectsWrapper, Title } from '../../styles/utils';
import ProjectCard from '../ProjectCard';

const items = [
  {
    title: 'Freiheit',
    link: 'https://www.behance.net/gallery/58937147/Freiheit',
    description: "This project is my entry to Adobe's #ChallengeYourPerspective contest.",
    bg: 'linear-gradient(to right, #D4145A 0%, #FBB03B 100%)',
  },
  {
    title: 'Harry Potter',
    link: 'https://www.behance.net/gallery/52915793/Harry-Potter',
    description: 'I entered the DOCMA 2017 award with this Harry Potter inspired image.',
    bg: 'linear-gradient(to right, #662D8C 0%, #ED1E79 100%)',
  },
  {
    title: 'Tomb Raider',
    link: 'https://www.behance.net/gallery/43907099/Tomb-Raider',
    description: 'Recreation of a Tomb Raider Wallpaper (Fan Art)',
    bg: 'linear-gradient(to right, #009245 0%, #FCEE21 100%)',
  },
];

const Projects = () => (
  <React.Fragment>
    <Title>Projects</Title>
    <ProjectsWrapper>
      {items.map((item, index) => (
        <ProjectCard title={item.title} link={item.link} bg={item.bg}>
          {item.description}
        </ProjectCard>
      ))}
    </ProjectsWrapper>
  </React.Fragment>
);

export default Projects;
