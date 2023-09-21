import { PropsWithChildren, useRef } from "react";
import { Canvas, MeshProps, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  Edges,
  MeshPortalMaterial,
  CameraControls,
  Environment,
  PivotControls,
  OrbitControls,
  useMask,
  Html,
} from "@react-three/drei";
// import { useControls } from "leva";
import { Euler, Mesh, ShapeGeometry } from "three";

export function Atom({ invert, ...props }: { invert?: boolean } & MeshProps) {
  // const stencil = useMask(1, invert);
  const { nodes } = useGLTF<any>(
    "/react-transformed.glb"
  ) as unknown as GLTFResult;
  return (
    <mesh
      // castShadow
      // receiveShadow
      geometry={nodes.atom.geometry}
      {...props}
      dispose={null}
    >
      <meshPhongMaterial color="#33BBFF" />
    </mesh>
  );
}

function Annotation({ children, ...props }: PropsWithChildren<any>) {
  return (
    <Html
      {...props}
      transform
      occlude="blending"
      // occlude="blending"
      geometry={
        /** The geometry is optional, it allows you to use any shape.
         *  By default it would be a plane. We need round edges here ...
         */
        <planeGeometry args={[0.65, 0.3, 64]} />
      }
    >
      <div className="annotation">{children}</div>
    </Html>
  );
}

export const MagicBox = () => (
  <Canvas shadows camera={{ position: [2, 2, 2] }}>
    {/* <PivotControls anchor={[-1.1, -1.1, -1.1]} scale={0.75} lineWidth={3.5}> */}
    <mesh castShadow receiveShadow>
      <boxGeometry args={[2, 2, 2]} />
      {/* <Edges /> */}
      <Side rotation={[0, 0, 0]} bg="orange" index={0}>
        <torusGeometry args={[0.65, 0.3, 64]} />
      </Side>
      <Side rotation={[0, Math.PI, 0]} bg="lightblue" index={1}>
        {/* <torusKnotGeometry args={[0.55, 0.2, 128, 32]} /> */}
        <Atom scale={0.7} />
      </Side>
      <Side rotation={[0, Math.PI / 2, Math.PI / 2]} bg="lightgreen" index={2}>
        <boxGeometry args={[1.15, 1.15, 1.15]} />
        {/* <coneGeometry /> */}
      </Side>
      <Side rotation={[0, Math.PI / 2, -Math.PI / 2]} bg="aquamarine" index={3}>
        <octahedronGeometry />
        {/* <Annotation>PHP</Annotation> */}
      </Side>
      <Side rotation={[0, -Math.PI / 2, 0]} bg="indianred" index={4}>
        <icosahedronGeometry />
      </Side>
      <Side rotation={[0, Math.PI / 2, 0]} bg="hotpink" index={5}>
        <dodecahedronGeometry />
      </Side>
    </mesh>
    {/* </PivotControls> */}
    <OrbitControls rotateSpeed={2} enableZoom={false} autoRotate={true} />

    {/* <CameraControls makeDefault /> */}
  </Canvas>
);

interface GLTFResult {
  nodes: { [key: string]: any };
  materials: { [key: string]: any };
}

function Side({
  rotation = [0, 0, 0],
  bg = "#f0f0f0",
  children,
  index,
}: PropsWithChildren<{ rotation: number[]; bg: string; index: number }>) {
  const mesh = useRef<Mesh | null>(null);
  // const { worldUnits } = useControls({ worldUnits: false });
  const { nodes } = useGLTF<any>(
    "/aobox-transformed.glb"
  ) as unknown as GLTFResult;

  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = mesh.current.rotation.y += delta;
  });

  return (
    <MeshPortalMaterial attach={`material-${index}`}>
      {/** Everything in here is inside the portal and isolated from the canvas */}
      <ambientLight intensity={0.3} />
      <Environment preset="city" />
      {/** A box with baked AO */}
      <mesh
        castShadow
        receiveShadow
        rotation={new Euler(...rotation)}
        geometry={nodes.Cube.geometry}
      >
        <meshStandardMaterial
          aoMapIntensity={0.1}
          // aoMap={nodes.Cube.material.aoMap}
          color={bg}
        />

        <spotLight
          castShadow
          color={bg}
          intensity={1}
          position={[15, 15, 15]}
          angle={0.15}
          penumbra={1}
          shadow-normalBias={0.05}
          shadow-bias={0.0001}
          // receiveShadow
        />
      </mesh>
      {/** The shape */}
      <mesh castShadow receiveShadow ref={mesh}>
        {children}
        <meshLambertMaterial color={bg} />
      </mesh>
    </MeshPortalMaterial>
  );
}
