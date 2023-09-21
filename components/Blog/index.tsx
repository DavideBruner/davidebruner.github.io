import cn from "classnames";
import NextImage from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./index.module.scss";
import { Post as PostProps } from "../../types";
import Button from "../Button";
import { fadeIn } from "../../constants/animations";
import Link from "next/link";
import { formatDate } from "../../utils/date";
import { useId } from "react";

export function Image({ id, ...props }: any) {
  //  Conditionally enable or disable the motion props
  //  Main is true when this Image component is clicked or shown as full size
  // const variants = {
  //   initial: { opacity: 1 },
  //   animate: { opacity: 1 },
  //   exit: { opacity: 1 },
  // };

  console.log({ id });

  return (
    // <motion.figure
    //   layoutId={`image-${id}`}
    //   // initial={false}
    //   // variants={variants}
    //   // initial="initial"
    //   // animate="animate"
    //   // exit="exit"
    //   // transition={{ duration: 4 }}
    //   // className={styles.image}
    // >
    <NextImage {...props} />
    // </motion.figure>
  );
}

const Blog = ({
  title,
  description,
  slug,
  image,
  publishedAt,
  readTime,
  id,
}: PostProps): JSX.Element => {
  const animation = fadeIn({
    transition: { duration: 0.2, delayChilderen: 0.5 },
  });

  const variants = {
    initial: {},
    animate: {},
    exit: { width: 200, height: 500 },
  };

  return (
    <motion.figure
      // key={id}
      layoutId={id}
      // variants={variants}
      transition={{ duration: 10 }}
      // className={styles.image}
      style={{ maxWidth: 500 }}
    >
      <h3 className={styles.title}>{title}</h3>
      <Image
        alt=""
        src={image}
        width={500}
        height={300}
        className={styles.background}
        style={{ width: "100%" }}
      />
      <p className={styles.description}>{description}</p>
      <p className={styles.meta}>
        Published on{" "}
        <time dateTime={publishedAt}>{formatDate(publishedAt)}</time> &middot;{" "}
        {readTime}
      </p>
      <Button link={{ as: `/blog/${slug}`, href: "/blog/[slug]" }}>
        Read more
      </Button>
    </motion.figure>
  );
};

export default Blog;
