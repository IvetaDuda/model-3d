'use client';

import { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
// import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import { useMotionValue } from 'framer-motion';
import { motion } from 'framer-motion-3d';
import { useEffect } from 'react';

const Cube = () => {
  const mesh = useRef(null);

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const manageMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const x = clientX / innerWidth;
    const y = clientY / innerHeight;
    mouse.x.set(x);
    mouse.y.set(y);
  };

  useEffect(() => {
    window.addEventListener('mousemove', manageMouseMove);

    return () => window.removeEventListener('mouse', manageMouseMove);
  }, []);

  // useFrame((state, delta) => {
  //   mesh.current.rotation.x += delta * 0.25;
  //   mesh.current.rotation.y += delta * 0.25;
  //   mesh.current.rotation.z += delta * 0.25;
  // });

  const texture_1 = useLoader(
    TextureLoader,
    '/assents/annie-spratt-CQ2YvMAN7zE-unsplash.jpg'
  );
  const texture_2 = useLoader(
    TextureLoader,
    '/assents/annie-spratt-FqpSyjCdccw-unsplash.jpg'
  );
  const texture_3 = useLoader(
    TextureLoader,
    '/assents/background-beauty-salon.jpg'
  );
  const texture_4 = useLoader(
    TextureLoader,
    '/assents/nail-hygiene-care-flat-lay.jpg'
  );
  const texture_5 = useLoader(
    TextureLoader,
    '/assents/pexels-dziana-hasanbekava-5480713.jpg'
  );
  const texture_6 = useLoader(
    TextureLoader,
    '/assents/pexels-katja-592077.jpg'
  );
  const texture_7 = useLoader(
    TextureLoader,
    '/assents/pexels-markus-spiske-108486.jpg'
  );
  const texture_8 = useLoader(
    TextureLoader,
    '/assents/top-view-frame-with-beauty-products-copy-space.jpg'
  );
  return (
    <motion.mesh ref={mesh} rotation-x={mouse.y} rotation-y={mouse.x}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial map={texture_1} attach="material-0" />
      <meshStandardMaterial map={texture_2} attach="material-1" />
      <meshStandardMaterial map={texture_3} attach="material-2" />
      <meshStandardMaterial map={texture_4} attach="material-3" />
      <meshStandardMaterial map={texture_5} attach="material-4" />
      <meshStandardMaterial map={texture_6} attach="material-5" />
      <meshStandardMaterial map={texture_7} attach="material-6" />
      <meshStandardMaterial map={texture_8} attach="material-7" />
      {/* <meshStandardMaterial color={'orange'} /> */}
    </motion.mesh>
  );
};

export default Cube;
