import React from 'react';
import BeersContext from '../contexts/beers-context';
import BeerCard from './beer-card';
import BeerCardsLayout from './beer-cards-layout';

const BeerList = () => {
  const { beers, firstLoadFinished } = React.useContext(BeersContext);
  if (!firstLoadFinished) return null;

  return (
    <BeerCardsLayout>
      {beers.map((beer) => (<BeerCard key={beer.id} {...beer} />))}
    </BeerCardsLayout>
  );
};

export default BeerList;
