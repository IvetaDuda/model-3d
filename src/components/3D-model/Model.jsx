'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Cube from '../Cube/Cube';
import styles from './model.module.scss';

const Model = () => {
  return (
    <section className={styles.container}>
      <Canvas>
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={2} />
        <directionalLight position={[2, 1, 1]} />
        <Cube />
      </Canvas>
    </section>
  );
};

export default Model;
