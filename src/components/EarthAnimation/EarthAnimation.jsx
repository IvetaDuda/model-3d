'use client';

import { Canvas, useLoader } from '@react-three/fiber';
import { useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { motion } from 'framer-motion-3d';
// import styles from './EarthAnimation.module.scss';

const EarthAnimation = () => {
  const [color, normal, aoMap] = useLoader(TextureLoader, [
    '/earth/Earth-color.webp',
    '/earth/Earth-normal.webp',
    '/earth/Earth-occlusion.webp',
  ]);

  const scene = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scene,
    offset: ['start end', 'end start'],
  });

  const smoothRotation = useSpring(scrollYProgress, {
    damping: 20,
  });

  return (
    <Canvas ref={scene}>
      <ambientLight intensity={0.1} />
      <directionalLight intensity={3.5} position={[1, 0, -0.25]} />
      <motion.mesh scale={2.5} rotation-y={smoothRotation}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
      </motion.mesh>
    </Canvas>
  );
};

export default EarthAnimation;

/////https://www.youtube.com/watch?v=OpadDVCep_w
