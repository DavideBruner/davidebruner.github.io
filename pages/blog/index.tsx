import { Search } from "react-feather";
// import debounce from 'lodash.debounce'
import { readData } from "dipe";
import Link from "next/link";

import Layout from "../../components/Layout";
import Hero from "../../components/Hero";
import BlogPost from "../../components/Blog";
// import Subscribe from 'components/subscribe'
// import Input from 'components/input'
import { Post } from "../../types";
import config from "../../dipe.config";
import { formatDate } from "../../utils/date";
import useFilteredPosts from "../../hooks/useFilteredPosts";

import styles from "./index.module.scss";

type Props = {
  posts: Post[];
  title: string;
  description: string;
};

export async function getStaticProps() {
  const { data: posts } = await readData(config.blog);
  const { data } = await readData(config.blogpage);

  return {
    props: { posts, ...data },
  };
}

// const BlogPost = ({ summary, title, readingTime: readTime, publishedAt, image, slug }: Post): JSX.Element => (
//   <li key={slug}>
//     <>
//       {image && (
//         <Link as={`/blog/${slug}`} href="/blog/[slug]">
//           <a aria-label={title}>
//             {/* <BlogImage src={image} alt={title} /> */}
//           </a>
//         </Link>
//       )}
//     </>

//     <Link as={`/blog/${slug}`} href="/blog/[slug]">
//       <a className={styles.title}>{title}</a>
//     </Link>
//     <p className={styles.summary}>{summary}</p>
//     <p className={styles.meta}>
//       Published on <time dateTime={publishedAt}>{formatDate(publishedAt)}</time> &middot; {readTime}
//     </p>
//   </li>
// )

const Blog = ({ posts, title, description }: Props): JSX.Element => {
  const [filteredPosts, handleInputChange] = useFilteredPosts({
    posts,
    search: "",
  });

  return (
    <>
      <Hero title={title} description={description}>
        <div className={styles.inputWrapper}>
          {/* <Input className={styles.input} value={currentSearch} onChange={handleInputChange} placeholder="Search posts…" type="search" /> */}
          <Search className={styles.inputIcon} />
        </div>
      </Hero>

      <ul className={styles.list}>
        {filteredPosts.length === 0 && (
          <p className={styles.noResults}>🧐 No posts found</p>
        )}

        {filteredPosts.map(BlogPost)}
      </ul>
      {/* <Subscribe title="Subscribe to the newsletter" /> */}
    </>
  );
};

export default Blog;
