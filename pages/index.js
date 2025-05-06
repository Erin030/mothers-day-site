import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={`${styles.container} ${styles.heartBg}`}>
      <nav className={styles.navbar}>
        <Link href="/Message" className={styles.link}>Message</Link>
        <Link href="/memories" className={styles.link}>Memories</Link>
      </nav>

      <h1 className={styles.title}>Happy Mother’s Day! 💐</h1>
      <p className={styles.message}>I made this website for you. Hope you are enjoying your China trip</p>


      <div className={styles.imageWrapper}>
        <Image
          src="/mom-photo.jpg"
          alt="Mom and me"
          width={630}
          height={540
          }
          className={styles.image}
        />
      </div>

    </div>

  );
}
