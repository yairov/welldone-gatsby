/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import classes from './Button.module.css';

const Button = ({children, className, ...rest}) => (
  <button className={`${classes.Button} ${className}`} type="button" {...rest}>
    {children}
  </button>
);

export default Button;
