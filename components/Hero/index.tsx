import { NextPage } from "next";
import Image from "next/image";

import styles from "./index.module.css";

const Hero = ({
  children,
  title,
  description,
  bg,
}: {
  children?: JSX.Element;
  title?: string | JSX.Element;
  description?: string;
  bg?: string;
}) => (
  <div className={styles.container} style={{ background: bg }}>
    <div style={{ marginBlock: "auto" }}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
    {children}
  </div>
);

export default Hero;
