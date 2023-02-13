import React from 'react';
import classes from './explore-card.module.scss';
import ExploreModel from '../../models/explore-model';
import Button from '../../components/ui/button';

type ExploreCardProps = ExploreModel;

const ExploreCard: React.FC<ExploreCardProps> = ({
  id,
  title,
  image,
  readtime,
  category,
  intro,
}) => (
  <div className={classes.card}>
    <div className={classes.content}>
      <img src={image} alt="" className={classes.img} />
      <div className={classes.topbar}>
        <div className={classes.topbarTopic}>{category}</div>
        <div className={classes.topbarRead}>
          {readtime}
          {' '}
          min to read
        </div>
      </div>
      <div className={classes.details}>
        <h2 className={classes.title}>{title}</h2>
        <p className={classes.intro}>
          {intro}
          ...
        </p>
      </div>

      <div className={classes.btnContainer}>
        <a className={classes.btnMore}>
          <span>
            Find out more
            {' '}
            <i className="fa-regular fa-arrow-up-right-from-square" />
          </span>
        </a>
      </div>
    </div>
  </div>
);

export default ExploreCard;
