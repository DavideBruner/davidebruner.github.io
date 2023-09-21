import { useRouter } from "next/router";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
// import * as gtag from 'lib/gtag'

import Head from "../components/Head";
import SEO from "../components/Seo";

import "../styles/globals.scss";
import Layout from "../components/Layout";

function App({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();

  return (
    <ThemeProvider defaultTheme="system">
      <SEO {...pageProps} />
      <Head pageProps={pageProps}>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <AnimatePresence initial={false}>
        <Layout>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
