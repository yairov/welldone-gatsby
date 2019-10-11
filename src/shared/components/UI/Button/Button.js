import React from 'react';
import classes from './Button.module.css';

const button = ({disabled, buttonType, clicked, children}) => (
  <button
    disabled={disabled}
    className={[classes.Button, classes[buttonType]].join(' ')}
    onClick={clicked}
    type="button"
  >
    {children}
  </button>
);

export default button;
