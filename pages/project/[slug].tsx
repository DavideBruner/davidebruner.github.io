import { readData } from "dipe";
import { GetStaticPaths, GetStaticProps } from "next/types";

import BackButton from "../../components/BackButton";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import config from "../../dipe.config";
import { Data, Project } from "../../types";

type Props = Data<Project> & {
  related?: Data<Project>[];
}

export default ({ title, description, content, related }: Props) => {
  return (
    <Layout>
      <BackButton />
      <Hero title={title} description={description} />
      <div dangerouslySetInnerHTML={{ __html: content}}/>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: projects } = await readData(config.projects);
  return {
    paths: projects.map((p: any) => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: projects } = await readData(config.projects);
  const project = projects.find(({ slug }: Data<Project>) => slug === params?.slug)
  const related = (projects as Data<Project>[])
    /* remove current post */
    .filter(p => p.slug !== params?.slug)
    /* Find other posts where tags are matching */
    // .filter(p => p.tags?.some(tag => post.tags?.includes(tag)))
    /* return the first three */
    .filter((_, i) => i < 3)
    /* only return what's needed to render the list */
    // .map(p => pick(p, ['slug', 'title', 'summary', 'publishedAt', 'image', 'readingTime']))

  return {
    props: {
      ...project,
      related,
    },
  }
}