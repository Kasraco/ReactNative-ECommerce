import { useState, Suspense } from "react";
import {
  OrbitControls,
  Preload,
  useGLTF,
  OrthographicCamera,
} from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

// @ts-ignore
import BagModel from "../../../assets/models/shopping_bag.glb";

const MainModel = () => {
  const model = useGLTF(BagModel);
  return (
    <group>
      <primitive
        object={model.scene}
        scale={[80, 80, 80]}
        position-y={20}
        rotation-x={-7.3}
        rotation-y={25.5}
        rotation-z={-6.3}
        position-z={300}
        position-x={-20}
      ></primitive>
    </group>
  );
};

export const Bag = () => {
  const [isDragin, setIsDragin]: any = useState(false);
  const floorType = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);

  return (
    <div className="h-screen cursor-grabbing">
      <Canvas camera={{ position: [4, 0, 1] as never }} dpr={[1, 2]} shadows>
        <directionalLight position={[2, 1, 10]} intensity={0.5} castShadow />
        <ambientLight intensity={0.5} color={"white"} />
        <hemisphereLight color={"#00b6ff"} intensity={2} />
        <pointLight color={"white"} position={[1, 3, 20]} intensity={1} />
        <mesh
          rotation={[-Math.PI / 2.0, 0] as never}
          position={[0, 0, 1, 0] as never}
          receiveShadow
        >
          <meshPhongMaterial
            attach={"material"}
            color="#000"
            side={THREE.DoubleSide}
          />
        </mesh>

        <Suspense>
          <OrthographicCamera
            makeDefault
            zoom={1}
            position={[-100, 500, 500]}
          />
          <OrbitControls minZoom={1} maxZoom={5} enabled={!isDragin} />
          <MainModel {...setIsDragin} floorType={floorType} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};
