import React from 'react';
import BeersContext from '../contexts/beers-context';
import classes from './header.module.scss';

const Header: React.FC = () => {
  const {
    beers,
    filters: {
      favorites: {
        options,
        selected,
      },
    },
    setFavoriteFilterOption,
  } = React.useContext(BeersContext);

  return (
    <div className={classes.header}>
      <div className={classes.title}>
        {`Visi Alūs (${beers.length})`}
      </div>
      <div>
        <select value={selected} onChange={(event) => setFavoriteFilterOption(event.target.value)}>
          {options.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
      </div>
    </div>
  );
};

export default Header;
