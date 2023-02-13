import React from 'react';
import classes from './beer-cards-layout.module.scss';

type BeerCardsLayoutProps = {
  children: React.ReactNode,
};

const BeerCardsLayout: React.FC<BeerCardsLayoutProps> = ({ children }) => (
  <div className={classes.layout}>{children}</div>
);

export default BeerCardsLayout;
