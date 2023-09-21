import { readData } from "dipe";
import { GetStaticPaths, GetStaticProps } from "next/types";

import { Image } from "../../components/Blog";

import BackButton from "../../components/BackButton";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import config from "../../dipe.config";
import { Data, Post } from "../../types";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { AnimatedHero } from "..";

type Props = Data<Post> & {
  related?: Data<Post>[];
};

export default function Blog({
  title,
  readTime,
  content,
  related,
  description,
  image,
  slug,
  id,
}: Props) {
  const router = useRouter();

  // if (router.isFallback) {
  //   return <div>Loading...</div>;
  // }

  const variants = {
    initial: {},
    animate: {},
    exit: { width: 600, height: 300 },
  };

  console.log({ slug, id });
  return (
    <>
      <motion.figure
        key={id}
        layoutId={id}
        // variants={variants}
        // transition={{ duration: 0.2, delay: 200 }}
        transition={{ duration: 10 }}
        // className={styles.image}
        style={{ maxWidth: 600 }}
      >
        <Image id={id} alt="" src={image} width={600} height={501} />

        <h3>{title}</h3>
        <p>{description}</p>
        <p>Published on {readTime}</p>
      </motion.figure>

      {/* <Hero title={title} description={readTime} />
      <div dangerouslySetInnerHTML={{ __html: content }} /> */}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: posts } = await readData(config.blog);
  return {
    paths: posts.map((p: any) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data: posts } = await readData(config.blog);
  const post = posts.find((p: any) => p.slug === params?.slug);
  const related = (posts as Data<Post>[])
    /* remove current post */
    .filter((p) => p.slug !== params?.slug)
    /* Find other posts where tags are matching */
    .filter((p) => p.tags?.some((tag) => post.tags?.includes(tag)))
    /* return the first three */
    .filter((_, i) => i < 3);
  /* only return what's needed to render the list */
  // .map(p => pick(p, ['slug', 'title', 'summary', 'publishedAt', 'image', 'readingTime']))

  return {
    props: {
      ...post,
      related,
    },
  };
};
