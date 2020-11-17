
import React from 'react';
import styles from '../../styles/Button.module.css'


const STYLES = ['btnPrimary', 'btnOutline', 'btnTest'];

const SIZES = ['btnMedium', 'btnLarge'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <a href='/components/pages/SignUp' className={styles.btnMobile}>
      <button
        className={styles.btnPrimary}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </a>
  );
};
