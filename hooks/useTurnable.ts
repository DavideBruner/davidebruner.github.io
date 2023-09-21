import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function useTurntable() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });
  return ref;
}
export default useTurntable;
