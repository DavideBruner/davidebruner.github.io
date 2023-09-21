import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import avatar from "../../public/images/avatar.png";
import styles from "./index.module.scss";
// import CommandPalette from "../CommandPalette";
import ThemeSwitch from "../ThemeSwitch";
import MenuLinks from "../MenuLinks";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
];

const Logo = () => (
  <Link href="/" className={styles.logo}>
    <Image
      src={avatar}
      alt="Davide Bruner"
      layout="fixed"
      width="45"
      height="45"
      priority
      placeholder="blur"
    />
  </Link>
);

const Header = (): JSX.Element => {
  const router = useRouter();
  const pathname = router.pathname.split("/[")[0]; // active paths on dynamic subpages
  // const [isSearchShown, setSearchShown] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Logo />
          <MenuLinks pathname={pathname} links={links} />
          {/* <CommandPalette isSearchShown={isSearchShown} onClick={() => setSearchShown(!isSearchShown)} /> */}
          <ThemeSwitch />
        </div>
      </header>
      {/* <div className={styles.spacer} /> */}
    </>
  );
};

export default Header;
