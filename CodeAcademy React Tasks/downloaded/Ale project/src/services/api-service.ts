import axios from 'axios';
import BeerModel from 'models/beer-model';
import FavoriteBeerRef from 'models/favorite-beer-ref';

const serverAPI = axios.create({
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  baseURL: 'http://localhost:5007',
});

const fetchBeers = async () => {
  const { status, data: beers } = await serverAPI.get<BeerModel[]>('/beers');

  if (status !== 200) {
    throw new Error('Server error: failed to fecth beers');
  }

  return beers;
};

const fetchBeer = async (id: string) => {
  const { status, data: beer } = await serverAPI.get<BeerModel>(`/beers/${id}`);

  if (status !== 200) {
    throw new Error('Server error: failed to fecth beers');
  }

  return beer;
};

const fetchFavoredBeersRefs = async () => {
  const { status, data: beers } = await serverAPI.get<FavoriteBeerRef[]>('/favoriteBeersRefs');

  if (status !== 200) {
    throw new Error('Server error: failed to fecth favorite beers refs');
  }

  return beers;
};

const deleteFavoredBeerRef = async (id: number) => {
  await serverAPI.delete(`/favoriteBeersRefs/${id}`);
};

const createFavoredBeerRef = async (beerId: number) => {
  await serverAPI.post('/favoriteBeersRefs', {
    beerId,
  });
};

const ApiService = {
  fetchBeers,
  fetchBeer,
  fetchFavoredBeersRefs,
  deleteFavoredBeerRef,
  createFavoredBeerRef,
};

export default ApiService;
