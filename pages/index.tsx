import { readData } from "dipe";
import Head from "next/head";
import type { NextPage } from "next";
import { useTheme } from "next-themes";

import Hero from "../components/Hero";
// import Blog from "../components/Blog";
// import Project from "../components/Project";

import config from "../dipe.config";
import Section from "../components/Section";
import { Atom, MagicBox } from "../components/canvas/MagicBox";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

const SectionIcon = ({ children, color }: any) => (
  <Canvas shadows camera={{ position: [3, 3, 3] }}>
    <OrbitControls rotateSpeed={20} enableZoom={false} autoRotate={true} />
    <ambientLight intensity={1} />
    <Environment preset="city" />
    <mesh castShadow receiveShadow>
      {children}
      <meshLambertMaterial color={color} />
    </mesh>
  </Canvas>
);

export async function getStaticProps() {
  const { data: posts } = await readData(config.blog);
  const { data: projects } = await readData(config.projects);
  const { data: homepage } = await readData(config.homepage);
  return {
    props: { posts, projects, ...homepage },
  };
}

const Blob = () => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 500 500"
    width="100%"
    id="blobSvg"
    style={{ opacity: 1 }}
  >
    {" "}
    <defs>
      {" "}
      <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        {" "}
        <stop
          offset="0%"
          style={{ stopColor: "rgb(247, 221, 134)" }}
        ></stop>{" "}
        <stop offset="100%" style={{ stopColor: "rgb(243, 225, 149)" }}></stop>{" "}
      </linearGradient>{" "}
    </defs>{" "}
    <path id="blob" fill="url(#gradient)" style={{ opacity: 1 }}>
      <animate
        attributeName="d"
        dur="25000ms"
        repeatCount="indefinite"
        values="M405.0078,325.44624Q400.89248,400.89248,325.44624,434.97549Q250,469.0585,165.42535,444.1039Q80.8507,419.1493,84.75627,334.57465Q88.66184,250,94.44262,175.1117Q100.2234,100.2234,175.1117,82.29749Q250,64.37159,306.73538,100.45042Q363.47075,136.52925,386.29693,193.26462Q409.12312,250,405.0078,325.44624Z;M423.42552,332.41134Q414.82268,414.82268,332.41134,424.30554Q250,433.78841,170.96572,420.92848Q91.93144,408.06856,46.07152,329.03428Q0.21159,250,66.88003,191.77423Q133.54846,133.54846,191.77423,102.82861Q250,72.10876,305.00592,106.04846Q360.01185,139.98815,396.0201,194.99408Q432.02836,250,423.42552,332.41134Z;M449.66467,329.57458Q409.14917,409.14917,329.57458,407.97733Q250,406.80549,191.3735,387.02924Q132.74701,367.25299,77.06026,308.6265Q21.3735,250,49.05191,163.36516Q76.73032,76.73032,163.36516,85.537Q250,94.34367,322.00775,100.16408Q394.01551,105.98449,442.09784,177.99225Q490.18018,250,449.66467,329.57458Z;M405.0078,325.44624Q400.89248,400.89248,325.44624,434.97549Q250,469.0585,165.42535,444.1039Q80.8507,419.1493,84.75627,334.57465Q88.66184,250,94.44262,175.1117Q100.2234,100.2234,175.1117,82.29749Q250,64.37159,306.73538,100.45042Q363.47075,136.52925,386.29693,193.26462Q409.12312,250,405.0078,325.44624Z"
      ></animate>
    </path>
  </svg>
);

const Home: NextPage = ({ posts, projects, title, description }: any) => {
  const { theme } = useTheme();
  console.log(posts);

  return (
    <div style={{ height: "100%", scrollSnapType: "y mandatory" }}>
      <Hero
        title={"Hi, my name is Davide."}
        description="I love creating beautiful user experiences. "
        // bg="white"
      >
        <div style={{ width: "300px", height: "300px" }}>
          <MagicBox />
        </div>
      </Hero>
      <Section
        title="What I do"
        description="Lorem Ipsum Lorem Ipsum"
        // icon={
        //   <SectionIcon color="orange">
        //     <torusGeometry args={[0.65, 0.3, 64]} />
        //   </SectionIcon>
        // }
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="">
            <SectionIcon color="orange">
              <torusGeometry args={[0.65, 0.3, 64]} />
            </SectionIcon>
          </div>
          <div className="">
            <SectionIcon color="lightblue">
              <Atom />
            </SectionIcon>
          </div>
          <div className="">
            <SectionIcon color="lightgreen">
              <boxGeometry args={[1.15, 1.15, 1.15]} />
            </SectionIcon>
          </div>
          <div className="">
            <SectionIcon color="aquamarine">
              <octahedronGeometry />
            </SectionIcon>
          </div>
          <div className="">
            <SectionIcon color="indianred">
              <icosahedronGeometry />
            </SectionIcon>
          </div>
          <div className="">
            <SectionIcon color="hotpink">
              <dodecahedronGeometry />
            </SectionIcon>
          </div>
        </div>
      </Section>
      <Section title="What I write about" description="Lorem Ipsum Lorem Ipsum">
        <>
          {/* <Blog posts={posts} /> 
        <Projects projects={projects} /> */}
        </>
      </Section>

      <Section
        title="Let's get in touch"
        description="Lorem Ipsum Lorem Ipsum"
      ></Section>
    </div>
  );
};

export default Home;
