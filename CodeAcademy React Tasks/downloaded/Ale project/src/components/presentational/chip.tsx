import React from 'react';
import classes from './chip.module.scss';

type ChipProps = {
  children: React.ReactNode,
};

const Chip: React.FC<ChipProps> = ({ children }) => (
  <span className={classes.chip}>{children}</span>
);

export default Chip;
