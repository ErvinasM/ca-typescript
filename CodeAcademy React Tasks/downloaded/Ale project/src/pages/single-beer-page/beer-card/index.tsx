import React from 'react';
import BeerModel from 'models/beer-model';
import BeerCardContent from './beer-card-content';
import BeerCardGallery from './beer-card-gallery';
import classes from './index.module.scss';

type BeerCardProps = BeerModel;

const BeerCard: React.FC<BeerCardProps> = ({
  images,
  id,
  ...rest
}) => (
  <div className={classes.layout}>
    <BeerCardGallery id={id} images={images} />
    <BeerCardContent {...rest} />
  </div>
);

export default BeerCard;
