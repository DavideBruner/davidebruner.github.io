import { readData } from 'dipe';
import Link from 'next/link';

import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import ProjectItem from '../../components/Project';
import { Project } from '../../types';
import config from '../../dipe.config';

import { formatDate } from '../../utils/date';
import BackButton from '../../components/BackButton';

// import styles from './index.module.scss'

type Props = {
  projects: Project[],
  title: string,
  description: string,
}

export async function getStaticProps() {
  const { data: projects  } = await readData(config.projects);
  const title = '';
  const description = '';
  return {
    props: { projects, title, description }
  }
}

const Projects = ({ projects, title, description }: Props): JSX.Element => {
  return (
    <Layout>
      <BackButton />

      <Hero title={title} description={description}>
        <div>Hi</div>
      </Hero>

      <ul>
        {projects.map(ProjectItem)}
      </ul>
    </Layout>
  )
}

export default Projects