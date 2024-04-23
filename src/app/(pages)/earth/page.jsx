// import EarthAnimation from '@/components/EarthAnimation/EarthAnimation';

import Projects from '@/components/EarthAnimation/Projects/Projects';
import SmoothScroll from '@/components/EarthAnimation/smoothScroll';

import dynamic from 'next/dynamic';
import styles from './page.module.scss';

const EarthAnimation = dynamic(
  () => import('@/components/EarthAnimation/EarthAnimation'),
  {
    ssr: false,

    loading: () => <img src="/earth/Earth-color.webp"></img>,
  }
);

const Earth = () => {
  return (
    <SmoothScroll>
      <section className={styles.containerEarth}>
        <EarthAnimation />
        <Projects />
      </section>
    </SmoothScroll>
  );
};

export default Earth;
