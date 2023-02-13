import React from 'react';
import Chip from 'components/presentational/chip';
import BeerModel from 'models/beer-model';
import classes from './index.module.scss';

type BeerCardContentProps = Omit<BeerModel, 'id' | 'images'>;

const BeerCardContent: React.FC<BeerCardContentProps> = ({
  brand,
  name,
  style,
  uid,
  ...rest
}) => (
  <div className={classes.content}>
    <h2 className={classes.brand}>{brand}</h2>
    <h1 className={classes.name}>{name}</h1>
    <h3 className={classes.style}>{style}</h3>
    <div className={classes.propsContainer}>
      {Object.entries(rest).map(([key, value]) => (
        <Chip key={key}>{`${key}: ${value}`}</Chip>
      ))}
    </div>
  </div>
);

export default BeerCardContent;
