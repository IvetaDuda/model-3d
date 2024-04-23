import Link from 'next/link';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={`${styles.header} container`}>
        <Link href="/" className={styles.headerLink}>
          Home
        </Link>
        <Link href="/cube" className={styles.headerLink}>
          Cube
        </Link>
        <Link href="/earth" className={styles.headerLink}>
          Earth
        </Link>
      </div>
    </header>
  );
};

export default Header;
