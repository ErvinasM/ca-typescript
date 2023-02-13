import React from 'react';
import cls from 'helpers/cls';
import styles from './index.module.scss';

const { animationTimeString, ...classes } = styles;
const animationTime = Number(animationTimeString);

type DirectionX = 'right' | 'left';

type BeerCardGalleryProps = {
  id: number,
  images: string[]
};

const BeerCardGallery: React.FC<BeerCardGalleryProps> = ({
  id,
  images,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const [newIndex, setNewIndex] = React.useState<number | null>(null);

  let direction: DirectionX | null = null;
  if (newIndex !== null && currentIndex < newIndex) direction = 'right';
  if (newIndex !== null && currentIndex > newIndex) direction = 'left';

  React.useEffect(() => {
    if (typeof newIndex === 'number') {
      setTimeout(() => {
        setCurrentIndex(newIndex);
        setNewIndex(null);
      }, animationTime);
    }
  }, [newIndex]);

  return (
    <div className={classes.gallery}>
      <span className={classes.id}>{id}</span>
      <div className={classes.imgContainer}>
        <div className={cls(classes.slider, direction !== null ? classes[direction] : '')}>
          {direction !== null && newIndex !== null && (
            <img
              className={cls(classes.img, classes[direction])}
              src={images[newIndex]}
              alt=""
            />
          )}
          <img className={classes.img} src={images[currentIndex] ?? '/img-not-found.png'} alt="" />
        </div>

      </div>
      {images.length > 1 && (
        <div className={classes.bulletContainer}>
          {images.map((img, imgIndex) => (
            <span
              key={img}
              className={imgIndex === currentIndex
                ? cls(classes.bullet, classes.active)
                : classes.bullet}
              onClick={() => {
                if (currentIndex !== imgIndex) {
                  setNewIndex(imgIndex);
                }
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BeerCardGallery;
