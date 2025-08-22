import Image from 'next/image';
import styles from './page.module.css';

import DriverForm from '@/Components/driverForm';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.formContainer}>
          <Image
            src='/vonco-logo.jpg'
            alt='Vonco Partners logo'
            width={300}
            height={300}
            className={styles.logoImage}
          />
          <DriverForm />
        </div>
      </main>
    </div>
  );
}
