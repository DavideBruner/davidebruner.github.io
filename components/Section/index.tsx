import { NextPage } from "next";
import Image from "next/image";

import styles from "./index.module.css";

const Section = ({
  children,
  title,
  description,
  icon,
}: {
  children?: JSX.Element;
  icon?: JSX.Element;
  title?: string | JSX.Element;
  description?: string;
}) => (
  <div className={styles.container}>
    <div style={{ display: "flex" }}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
    {children}
  </div>
);

export default Section;
