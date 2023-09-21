import NextHead from "next/head";

const Head = ({
  children,
  pageProps,
}: {
  children?: JSX.Element;
  pageProps?: Record<string, any>;
}) => (
  <NextHead>
    <title>Davide Bruner</title>
    <meta name="description" content="Davide Bruner's website" />
    <link rel="icon" href="/favicon.ico" />
    {children}
  </NextHead>
);

export default Head;
