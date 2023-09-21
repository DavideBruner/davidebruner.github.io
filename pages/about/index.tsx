import Image from "next/image";
import { NextSeo } from "next-seo";
import { readData } from "dipe";

import config from "../../dipe.config";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import styles from "./about.module.scss";

export async function getStaticProps() {
  const { data } = await readData(config.about);
  return {
    props: { ...data },
  };
}

const About = ({ content, image }: any): JSX.Element => (
  <>
    <Image
      src={image}
      alt="Picture of me (Davide Bruner)"
      className={styles.image}
      // priority
      width={100}
      height={100}
    />
    <div
      className={styles.text}
      dangerouslySetInnerHTML={{ __html: content }}
    />
    <Button link={{ href: "mailto:davidebruner@hotmail.it" }}>
      Contact me
    </Button>
  </>
);

export default About;
