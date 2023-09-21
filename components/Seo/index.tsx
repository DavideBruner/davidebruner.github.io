import { NextSeo } from "next-seo";

interface Props {
  title: string;
  description: string;
  openGraph?: any;
  twitter?: any;
}

const Seo = ({ title, description, twitter, openGraph }: Props) => (
  <NextSeo 
    title={title}
    description={description}
    twitter={twitter}
    openGraph={openGraph}
  />
);

export default Seo;