import Link from "next/link";
import styles from "../../styles/Pages.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className={styles.title}>Team</h1>
          <p className={styles.description}>
            Shivani Shimpi
            <br />
            Ritik Sharma
            <br />
            Punyak Deshmukh
          </p>
        </div>
      </main>
    </div>
  );
}
