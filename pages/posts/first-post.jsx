import Link from 'next/link';
import styles from "./page.module.css";
export default function FirstPost() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>First Post</h1>
      <h2>
        <Link href="/" target='_blank'>Back to home</Link>
      </h2>
      <p>나는 김지현입니다.</p>
      <img src='/flower.jpg' width={400} height={300} alt='FLOWER' className='flower' />
      <p>행복하고 웃음 가득한 나날들 보내세요~~</p>
    </div>
  );
}
