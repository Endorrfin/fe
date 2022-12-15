import React from 'react';
import classes from './BaseButton.module.css';

const BaseButton = ({children, ...props}) => {
  return (
    <button {...props} className={classes.baseButton}>
      {children}
    </button>
  );
};

export default BaseButton;