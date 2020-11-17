import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import styles from '../../styles/Navbar.module.css'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>
          <a href='/' className={styles.navbarLogo} onClick={closeMobileMenu}>
            WDL
          </a>
          <div className={styles.menuIcon} onClick={handleClick}>
            <i className={styles.faTimes} />
          </div>
          <ul className={styles.navMenu}>
            <li className={styles.navItem}>
              <a href='/' className={styles.navLinks} onClick={closeMobileMenu}>
                Home
              </a>
            </li>
            <li className={styles.navItem}>
              <a
                href='/components/pages/Stories'
                className={styles.navLinks}
                onClick={closeMobileMenu}
              >
                Stories
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='/components/pages/Blog'
                className={styles.navLinks}
                onClick={closeMobileMenu}
              >
                Blog
              </a>
            </li>

            <li>
              <a
                href='/components/pages/SignUp'
                className={styles.navLinksMobile}
                onClick={closeMobileMenu}
              >
                Sign Up
              </a>
            </li>
          </ul>
          {button && <Button buttonStyle={styles.btnOutline}>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
