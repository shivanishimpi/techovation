import React from 'react';
import { Button } from './Button';
import styles from '../../styles/Home.module.css'

function LandingPage() {
  return (
    <div className={styles.heroContainer}>
      <video className={styles.video} src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>MoonLight Sunshine</h1>
      <p>I've been fool !</p>
      <div className={styles.heroBtns}>
      <Button
          className={styles.btn}
          buttonStyle={styles.btnOutline}
          buttonSize={styles.btnLarge}
        >
          GET STARTED
        </Button>
        <Button
          className={styles.btn}
          buttonStyle={styles.btnPrimary}
          buttonSize={styles.btnLarge}
        >
          WATCH STORIES
        </Button>
      </div>
    </div>
  );
}

export default LandingPage;
