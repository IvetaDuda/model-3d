'use client';

import { OrbitControls } from '@react-three/drei';
// import { OrbitControls, ScrollControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Cube from './Cube/Cube';
import styles from './model.module.scss';

const Model = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, 5]);

  const smothProgress = useSpring(progress, { demping: 20 });

  return (
    <section ref={container} className={`${styles.container} container`}>
      <div className={styles.cube}>
        <Canvas>
          {/* <ScrollControls pages={5} damping={0.1}> */}
          <OrbitControls enableZoom={false} enablePan={false} />
          <ambientLight intensity={2} />
          <directionalLight position={[2, 1, 1]} />
          <Cube progress={smothProgress} />
          {/* </ScrollControls> */}
        </Canvas>
      </div>
    </section>
  );
};

export default Model;

//////https://www.youtube.com/watch?v=9XvZ3ChtT9M
