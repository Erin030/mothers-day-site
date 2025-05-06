import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

const memoryContent = {
  sanfran: {
    title: "San Francisco Trip",
    content: (
      <>
        <p className={styles.message}>
          This was during our San Francisco trip. I had a photo of you and Dad but I'm not sure if I ever sent the photo to you.
        </p>
        <div className={styles.imageWrapper}>
          <Image
            src="/sanfran.JPG"
            alt="San Francisco"
            width={630}
            height={540}
            className={styles.image}
          />
        </div>
      </>
    )
  },
  bday: {
    title: "Birthday",
    content: (
      <>
        <p className={styles.message}>
          This was one of your birthdays that we celebrated at Grandma's house. There were two cakes this time because I think either Yali made another one, or she just happened to grab an extra one.
        </p>
        <div className={styles.imageWrapper}>
          <Image
            src="/mombday.JPG"
            alt="Birthday"
            width={630}
            height={540}
            className={styles.image}
          />
        </div>
      </>
    )
  },
  hawaii: {
    title: "Hawaii",
    content: (
      <>
        <p className={styles.message}>
          One of the trips I really enjoyed. The weather in Hawaii was nice, and the food was really good. Just look at how much we ate in the photo. I also remember the people dancing with fire.
        </p>
        <div className={styles.imageWrapper}>
          <Image
            src="/hawaii.JPG"
            alt="Hawaii"
            width={630}
            height={540}
            className={styles.image}
          />
        </div>
      </>
    )
  },
  china: {
    title: "China",
    content: (
      <>
        <p className={styles.message}>
          When we went to China back when I just finished sixth grade. It was pretty fun, but I honestly do not remember much. I just know I went to a lot of places and took an overnight train ride to somewhere.
        </p>
        <div className={styles.imageWrapper}>
          <Image
            src="/china.JPG"
            alt="China 1"
            width={630}
            height={540}
            className={styles.image}
          />
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/china2.jpg"
            alt="China 2"
            width={630}
            height={540}
            className={styles.image}
          />
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src="/china3.JPG"
            alt="China 3"
            width={630}
            height={540}
            className={styles.image}
          />
        </div>
      </>
    )
  },
  oregon: {
    title: "Oregon",
    content: (
      <>
        <p className={styles.message}>
          This was from so long ago I'm surprised that I have a picture in my camera roll. I think this was when we went to Oregon, but I'm not sure. I do recognize the waterfall being from there.
        </p>
        <div className={styles.imageWrapper}>
          <Image
            src="/oregon.JPG"
            alt="Oregon"
            width={630}
            height={540}
            className={styles.image}
          />
        </div>
      </>
    )
  }
};

export default function MemoryDetail() {
  const router = useRouter();
  const { id } = router.query;
  const memory = memoryContent[id?.toLowerCase()];

  if (!memory) return <p>Loading...</p>;

  return (
    <div className={`${styles.container} ${styles.heartBg}`}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/memories" className={styles.link}>Back to Memories</Link>
      </nav>

      <h1 className={styles.title}>{memory.title}</h1>
      {memory.content}
    </div>
  );
}
