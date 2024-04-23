'use client';

import { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
// import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
// import { useMotionValue, useSpring } from 'framer-motion';
import { motion } from 'framer-motion-3d';
// import { useEffect } from 'react';
// import { useScroll } from '@react-three/drei';

const Cube = ({ progress }) => {
  const mesh = useRef(null);

  // const data = useScroll();

  // useFrame((state, delta) => {
  //   const { offset } = data;
  //   mesh.current.rotation.x = offset * 5;
  //   mesh.current.rotation.y = offset * 5;
  //   mesh.current.rotation.z = offset * 5;
  // });

  // const option = {
  //   damping: 20,
  // };

  // const mouse = {
  //   x: useSpring(useMotionValue(0), option),
  //   y: useSpring(useMotionValue(0), option),
  // };

  // const manageMouseMove = (e) => {
  //   const { innerWidth, innerHeight } = window;
  //   const { clientX, clientY } = e;
  //   const x = -0.5 + clientX / innerWidth;
  //   const y = -0.5 + clientY / innerHeight;
  //   mouse.x.set(x);
  //   mouse.y.set(y);
  // };

  // useEffect(() => {
  //   window.addEventListener('mousemove', manageMouseMove);

  //   return () => window.removeEventListener('mouse', manageMouseMove);
  // }, []);

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
  return (
    <motion.mesh ref={mesh} rotation-y={progress} rotation-x={progress}>
      {/* <motion.mesh ref={mesh} rotation-x={mouse.y} rotation-y={mouse.x}> */}
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial map={texture_1} attach="material-0" />
      <meshStandardMaterial map={texture_2} attach="material-1" />
      <meshStandardMaterial map={texture_3} attach="material-2" />
      <meshStandardMaterial map={texture_4} attach="material-3" />
      <meshStandardMaterial map={texture_5} attach="material-4" />
      <meshStandardMaterial map={texture_6} attach="material-5" />
    </motion.mesh>
  );
};

export default Cube;
