import Link from "next/link";
import styles from "./index.module.scss";

type Link = {
  name: string;
  url: string;
};

type FooterProps = {
  links?: Link[];
};

const Footer = ({ links }: FooterProps): JSX.Element => (
  <footer className={styles.footer}>
    {links && (
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    )}
    <p className={styles.copyright}>
      &copy; Davide Bruner {new Date().getFullYear()}
    </p>
  </footer>
);

export default Footer;
