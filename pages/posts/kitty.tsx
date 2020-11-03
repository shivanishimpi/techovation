import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Pages.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Techovation/Kitty</title>
        <link rel="icon" href="/future.svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.card}>
          <h1 className={styles.title}>KITTIES: Cute furry puff balls</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi odio
            ligula, ornare a ex vitae, sodales bibendum enim. Praesent imperdiet
            sit amet augue quis hendrerit. Vestibulum lectus massa, finibus ac
            varius sit amet, molestie ut leo. Praesent ac quam id lacus
            consectetur venenatis ut eu sapien. In euismod odio nec elit sodales
            ultricies. Fusce in sem scelerisque, tincidunt sem eu, rhoncus arcu.
            Sed viverra tempus scelerisque. Proin molestie lacinia dapibus.
            Etiam porta diam in risus sagittis, eu pretium lorem suscipit. In
            molestie justo metus.
            <br />
            <br />
            Pellentesque sollicitudin mi ligula, in consectetur ex ullamcorper
            vitae. Duis sed porta massa, ut pretium lectus. Aenean luctus tempor
            erat non fringilla. Praesent ligula orci, fringilla id velit ac,
            volutpat malesuada purus. In hac habitasse platea dictumst. Aenean
            eu rutrum felis, vel consequat eros. Aliquam at tristique dolor, in
            congue dolor. Donec eget risus nec odio finibus blandit non quis
            urna. Curabitur sed magna quis urna pulvinar condimentum eu vitae
            nisl. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas.
            <br />
            <br />
            Nulla viverra, arcu sed fermentum porta, est ipsum ullamcorper quam,
            id euismod ligula lorem tincidunt risus. Fusce sollicitudin
            ullamcorper mi eget consectetur. Maecenas convallis nec metus ac
            dapibus. Donec vulputate nunc quam, in sollicitudin magna
            ullamcorper vel. Ut sodales mollis leo. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut ipsum mauris, dapibus vitae
            consectetur in, dignissim non erat. Curabitur id nunc sit amet magna
            iaculis blandit vel eu nunc. Pellentesque congue magna vel ante
            pretium, at ornare nisi interdum. Vivamus vestibulum tortor vitae
            lacus commodo iaculis. Integer ullamcorper ipsum erat.
            <br />
            <br />
            Donec placerat euismod mi a scelerisque. Vestibulum est tellus,
            finibus ac dui eu, auctor posuere mi. Nullam in eros eleifend,
            ultrices risus eu, venenatis lectus. Aenean ut blandit nisi. Aliquam
            gravida nulla sed ipsum varius commodo. Duis blandit placerat massa
            ac suscipit. Sed augue nisi, viverra eget arcu eu, pulvinar
            porttitor lorem. Ut faucibus sem ipsum, malesuada viverra libero
            blandit at. In neque dui, bibendum ut mauris sed, cursus scelerisque
            mauris. Aenean ac feugiat leo, nec malesuada dui. Nam pulvinar
            cursus dolor, rhoncus dignissim dolor hendrerit quis. Etiam blandit
            eros id ante tincidunt, rhoncus semper augue accumsan. Quisque a
            tristique purus, vitae finibus quam. Aliquam ac ligula vel mauris
            condimentum cursus id eget lorem.
          </p>
        </div>
      </main>
      <footer className={styles.footer}>
        <a href="posts/team" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
