import React from 'react';
import { useNavigate } from 'react-router-dom';
import { faHeart as heartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as heartRegular } from '@fortawesome/free-regular-svg-icons';
import cls from 'helpers/cls';
import BeerModel from 'models/beer-model';
import IconButton from 'components/presentational/icon-button';
import classes from './index.module.scss';
import ListItem from './list-item';
import BeersContext from '../../contexts/beers-context';

type BeerCardProps = BeerModel;

const BeerCard: React.FC<BeerCardProps> = ({
  id,
  uid,
  name,
  brand,
  style,
  images,
  ...listProps
}) => {
  const navigate = useNavigate();
  const { favorBeer, favoriteBeersRefs } = React.useContext(BeersContext);

  const imgClasses = [classes.img];
  if (images[0] !== undefined) imgClasses.push(classes.imgContain);

  const handleFavoriteClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    favorBeer(id);
  };

  const favorite = Boolean(favoriteBeersRefs.find((ref) => ref.beerId === id));

  return (
    <div
      className={classes.card}
      role="button"
      onClick={() => navigate(`/beer/${id}`)}
    >
      <img src={images[0] ?? '/img-not-found.png'} alt="" className={cls(...imgClasses)} />
      <div className={classes.backgroundOverlay} />
      <div className={classes.cardContent}>
        <div>
          <span className={classes.favoriteIcon}>
            <IconButton
              color="primary"
              icon={favorite ? heartSolid : heartRegular}
              onClick={handleFavoriteClick}
            />
          </span>
          <div className={classes.name}>{name}</div>
          <div>
            <span className={classes.brand}>{brand}</span>
            <span className={classes.delimeter}> - </span>
            <span className={classes.style}>{style}</span>
          </div>
        </div>
        <ul className={classes.list}>
          {Object.entries(listProps).map(([itemName, itemValue]) => (
            <ListItem key={itemName} name={itemName}>
              {itemValue}
            </ListItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BeerCard;
