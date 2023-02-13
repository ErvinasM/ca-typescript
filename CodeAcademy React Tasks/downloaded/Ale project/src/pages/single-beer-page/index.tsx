import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import useQuery from 'hooks/use-query';
import ApiService from 'services/api-service';
import BeerCard from './beer-card';
import classes from './index.module.scss';

const SingleBeerPage = () => {
  const { beerId } = useParams();
  if (beerId === undefined) return <Navigate to="/page-not-found" />;

  const { data: beer, errorMessage } = useQuery(async () => ApiService.fetchBeer(beerId), null);
  if (errorMessage !== null) return <Navigate to="/page-not-found" />;

  return (
    <div className={classes.layout}>
      {beer && <BeerCard {...beer} />}
    </div>
  );
};

export default SingleBeerPage;
