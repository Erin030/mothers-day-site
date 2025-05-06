import Link from 'next/link';
import styles from '../../styles/Home.module.css';

const memoryData = [
  { id: 'sanfran', title: "San Francisco Trip" },
  { id: 'bday', title: "Birthday" },
  { id: 'hawaii', title: "Hawaii" },
  { id: 'china', title: "China" },
  { id: 'oregon', title: "Oregon" }
];

export default function Memories() {
  return (
    <div className={`${styles.container} ${styles.heartBg}`}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/about" className={styles.link}>About You</Link>
      </nav>

      <h1 className={styles.title}>Favorite Memories</h1>
      <ul className={styles.memoryList}>
        {memoryData.map((memory) => (
            <li key={memory.id}>
                <Link href={`/memories/${memory.id}`} className={styles.link}>
        {memory.title}
      </Link>
    </li>
  ))}
</ul>
    </div>
  );
}
