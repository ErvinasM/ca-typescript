import React from 'react';
import BeerList from './components/beer-list';
import Header from './components/header';
import { BeersProvider } from './contexts/beers-context';

const BeerListPage = () => (
  <BeersProvider>
    <Header />
    <BeerList />
  </BeersProvider>
);

export default BeerListPage;
