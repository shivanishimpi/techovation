import Head from "next/head";
import Link from "next/link";
import { hrtime } from "process";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Techovation</title>
        <link rel="icon" href="/future.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href="/">Techovation</a>
        </h1>
        <p 
          className={styles.description}>
          Cause Strawberries and Cigarettes
          <br />
          always taste like you.
        </p>
{/* 
        <p 
          className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
          <br />
          To modify the pages, start by editing{" "}
          <code className={styles.code}>pages/posts/*.tsx</code>
        </p> */}

        <div className={styles.grid}>
          <a
            href="posts/sunshine"
            target="_blank"
            className={styles.card}
          >
            <h3>Sunshine &rarr;</h3>
            <p>This is going to be a quick introduction to how Sunshine works and performs.</p>
          </a>

          <a
            href="posts/moonshine"
            target="_blank"
            className={styles.card}
          >
            <h3>Moonshine &rarr;</h3>
            <p>A concise and quick deep dive into the functioning of Moonshine and its dependencies.</p>
          </a>
          <a
            href="posts/cookie"
            target="_blank"
            className={styles.card}
          >
            <h3>Cookie &rarr;</h3>
            <p>Enough blogging. <br/>Let's eat Cookies.</p>
          </a>

          
          <a
            href="posts/kitty"
            target="_blank"
            className={styles.card}
          >
            <h3>Kitty &rarr;</h3>
            <p>
              I am full right now <br/>
              Let's play with kitties.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="posts/team"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
