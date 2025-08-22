import styles from './header.module.css';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href='./'>
        <h3 className={styles.logo}>Vonco Partners</h3>
      </Link>
      <nav className={styles.nav}>
        <Link href='./work'>
          <h3 className={styles.navBtn}>Work with us</h3>
        </Link>
        <Link href='./about'>
          <h3 className={styles.navBtn}>About us</h3>
        </Link>
        <Link href='./contacts'>
          <h3 className={styles.navBtn}>Contacts</h3>
        </Link>
      </nav>
    </header>
  );
}
