import React from 'react';
import { Button } from './Button';
import styles from '../../styles/Footer.module.css';

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <section className={styles.footerSubscription}>
        <p className={styles.footerSubscriptionHeading}>
          Join the Moon and sun newsletter to receive our best stories
        </p>
        <p className={styles.footerSubscriptionText}>
          You can unsubscribe at any time.
        </p>
        <div>
          <form>
            <input
              className={styles.footerInput}
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle={styles.btnOutline}>Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Footer;
