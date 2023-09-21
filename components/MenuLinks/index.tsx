import Link from "next/link";
import { Link as LinkType } from "../../types";
import styles from "./index.module.scss";

const MenuLinks = ({
  pathname,
  links,
}: {
  pathname: string;
  links: LinkType[];
}) => (
  <nav className={styles.nav}>
    <ol className={styles.links}>
      {links.map(({ name, path }) => (
        <li
          key={path}
          className={pathname === path ? styles.linkActive : styles.link}
        >
          <Link href={path}>{name}</Link>
        </li>
      ))}
    </ol>
  </nav>
);

export default MenuLinks;
