import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function About() {
  return (
    <div className={`${styles.container} ${styles.heartBg}`}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/memories" className={styles.link}>Memories</Link>
      </nav>

      <h1 className={styles.title}>Thank You...</h1>

      <p className={styles.message}>
        for doing all that you do for me. I really appreciate it even if I don&apos;t always show it.
        Since I can&apos;t get you an actual gift, here are some pretty pictures of flowers I think you would like. 💖
      </p>

      <div className={styles.imageWrapper}>
        <Image
          src="/flowers.jpg"
          alt="flowers"
          width={360}
          height={420}
          className={styles.image}
        />
      </div>
    </div>
  );
}
