import { ReactNode } from "react";

// import NowPlaying from '../Nowplaying'
import Header from "../Header";
import Footer from "../Footer";
// import PageTransition from "../PageTransition";
// import { AnimatePresence, motion } from "framer-motion";

import styles from "./index.module.scss";

type LayoutProps = {
  children: ReactNode;
};

const footerLinks = [
  { name: "Home", url: "/" },
  { name: "Twitter", url: "https://twitter.com/DavideBruner" },
  { name: "Newsletter", url: "/newsletter" },
  { name: "About", url: "/about" },
  { name: "GitHub", url: "https://github.com/DavideBruner" },
  { name: "RSS", url: "/feed.xml" },
  { name: "Blog", url: "/blog" },
  { name: "Dribbble", url: "https://dribbble.com/DavideBruner" },
  { name: "Instagram", url: "https://www.instagram.com/DavideBruner" },
  // { name: '', url: '' },
  // { name: '', url: '' },
  // { name: 'Changelog', url: '/changelog' },
];

const Layout = ({ children }: LayoutProps): JSX.Element => (
  <div className={styles.container}>
    <Header />
    <main className={styles.main}>{children}</main>
    <Footer links={footerLinks} />
  </div>
);

export default Layout;
